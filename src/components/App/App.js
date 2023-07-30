import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Login from '../Login/Login.js'
import Register from '../Register/Register.js'
import NotFound from '../NotFound/NotFound.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { apiMovies } from '../../utils/MoviesApi.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as  auth from "../../utils/auth.js";
import api from "../../utils/MainApi.js"


function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth.checkToken(token)
        .then((data) => {
          setIsLogged(true);
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    apiMovies
      .getMovies()
      .then((cardsData) => {
        setFilteredMovies(cardsData.reverse())
      })
      .catch((err) => {
        console.log(err);
      })
  }, [isLogged]);


  function handleSubmitRegister({ name, email, password }) {
    auth
      .register(name, email, password)
      .then(() => {
          handleSubmitLogin({ email, password });
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
  }

  function handleSubmitLogin({ email, password }) {
    setIsLoading(true);
    auth
      .login(email, password)
      .then((data) => {
        if (data) {
          setIsLogged(true);
          localStorage.setItem('jwt', data.token);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleSignOut = () => {
    setIsLogged(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('movieSearch');
    localStorage.removeItem('movies');
    setCurrentUser({});
    navigate('/');
  };

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api
      .editUserInfo(newUserInfo)
      .then((data) => {
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLikeClick(card) {
    api
      .addSavedMovies(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteSavedMovie(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        setIsSuccess(false);
      });
  }

  function closeUnsuccessPopup() {
    setIsSuccess(true);
    setIsUpdate(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page__content">
          <Routes>
            <Route path='/' element={<Main isLogged={isLogged} />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  element={Movies}
                  isLogged={isLogged}
                  savedMovies={savedMovies}
                  onCardDelete={handleCardDelete}
                  handleLikeClick={handleLikeClick}
                />} />
            <Route path='/saved-movies'
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLogged={isLogged}
                  savedMovies={savedMovies}
                  onCardDelete={handleCardDelete}
                />} />
            <Route path='/profile' element={
              <ProtectedRoute element={Profile}
                isLogged={isLogged}
                signOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
                isLoading={isLoading} />} />
            <Route path='/signin' element={<Login onLogin={handleSubmitLogin} isLoading={isLoading} />} />
            <Route path='/signup' element={<Register onRegister={handleSubmitRegister} onLogin={handleSubmitLogin} isLoading={isLoading} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <InfoTooltip isSuccess={isSuccess} onClose={closeUnsuccessPopup} />
        <InfoTooltip isSuccess={!isUpdate} isUpdate={isUpdate} onClose={closeUnsuccessPopup} />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

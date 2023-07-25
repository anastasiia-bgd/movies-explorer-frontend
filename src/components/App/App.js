import React, {useEffect, useState} from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Login from '../Login/Login.js'
import Register from '../Register/Register.js'
import NotFound from '../NotFound/NotFound.js';
import { apiMovies } from '../../utils/MoviesApi.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as  auth from "../../utils/auth.js";
import api from "../../utils/MainApi.js"



function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  
  const navigate = useNavigate();

 
  useEffect(()=> {
    apiMovies.getMovies()
    .then((allMoviesData) => {
      localStorage.setItem('allMovies', JSON.stringify(allMoviesData));
    //setAllMovies(allMoviesData)
    })
    .catch(() => {
      localStorage.removeItem('allMovies');
    })
  }, [])

  const sortFilms = (arr, title) => {
    let newArr = [];
    console.log(arr)
   
    arr.forEach(item => {
       if (item.nameEN.toLowerCase().includes(title.toLowerCase())) newArr.push(item)
    });

    return newArr
  }

  function setFilms(searchTitle) {
    // функция сортировки фильмов
    // установка полученных фильмов
    const data = JSON.parse(localStorage.getItem('allMovies'))

    if (data) {
      console.log(sortFilms(data, searchTitle))
      setAllMovies(sortFilms(data, searchTitle));
    }
  }

  function handleSubmitRegister({ name, email, password }) {
    auth
      .register(name, email, password)
      .then((userData) => {
        if (userData) {
          handleSubmitLogin({ email, password });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function handleSubmitLogin({ email, password }) {
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          setIsLogged(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth.checkToken(token)
        .then((data) => {
          setIsLogged(true);
          setCurrentUser(data.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [navigate]);

  useEffect(() => {
    if (isLogged) {
      api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogged]);

  return (
    <div className="page">
      <div className="page__content">
      <CurrentUserContext.Provider value={currentUser} >
      <Routes>
        <Route path='/' element={<Main isLogged={isLogged}/>}/>
        <Route path='/movies' element={<Movies isLogged={isLogged} allMovies={allMovies} setFilms={setFilms} />}/>
        <Route path='/saved-movies' element={<SavedMovies isLogged={isLogged}/>}/>
        <Route path='/profile' element={<Profile isLogged={isLogged}/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register onRegister={handleSubmitRegister} onLogin={handleSubmitLogin}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;

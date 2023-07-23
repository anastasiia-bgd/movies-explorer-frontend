import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Login from '../Login/Login.js'
import Register from '../Register/Register.js'
import NotFound from '../NotFound/NotFound.js';



function App() {
  let isLogged;

  return (
    <div className="page">
      <div className="page__content">
      <Routes>
        <Route path='/' element={<Main isLogged={isLogged}/>}/>
        <Route path='/movies' element={<Movies isLogged={isLogged}/>}/>
        <Route path='/saved-movies' element={<SavedMovies isLogged={isLogged}/>}/>
        <Route path='/profile' element={<Profile isLogged={isLogged}/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

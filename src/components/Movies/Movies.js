import React, {useState} from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import api from "../../utils/MainApi.js"



function Movies({ isLogged, allMovies, setFilms, savedMovies, onCardDelete, handleLikeClick }) {

  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <section className="movies">
          <SearchForm setFilms={setFilms} />
          <MoviesCardList
            allMovies={allMovies}
            savedMovies={savedMovies}
            isSavedFilms={false}
            handleLikeClick={handleLikeClick}
            onCardDelete={onCardDelete} 
            />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;
import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';



function Movies( {isLogged, allMovies, setFilms} ) {
    isLogged=true;
  
    return(
        <>
        <Header isLogged={isLogged} />
        <main>
          <section className="movies">
        <SearchForm setFilms={setFilms} />
        <MoviesCardList allMovies={allMovies} />
        <div className='movies__button-container'>
        <button className='movies__button'>Еще</button>
        </div>
        </section>
        </main>
        <Footer />
        </>
    )
}

export default Movies;
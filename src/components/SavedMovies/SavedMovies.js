import React, {useState, useEffect} from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';


function SavedMovies({ isLogged, savedMovies, onCardDelete, isSavedFilms }) {


    return (
        <>
            <Header isLogged={isLogged} />
            <main>
                <section className='movies'>
                    <SearchForm />
                    <MoviesCardList 
                    savedMovies={savedMovies}
                    isSavedFilms={true}
                    onCardDelete={onCardDelete}/>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;
import React from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';


function SavedMovies({isLogged}) {

    return(
        <>
        <Header isLogged={isLogged} />
        <main>
        <section className='movies'>
        <SearchForm />
        <MoviesCardList />
        </section>
        </main>
        <Footer />
        </>
    )
}

export default SavedMovies;
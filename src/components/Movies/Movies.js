import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';



function Movies({isLogged}) {

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

export default Movies;
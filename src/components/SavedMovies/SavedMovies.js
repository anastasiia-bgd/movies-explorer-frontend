import React from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';


function SavedMovies({ isLogged }) {
    isLogged = true
    let savedMovies = [
        {
            title: "Film 1",
            duration: "1ч 42м",
            isOwn: true,
        },
        {
            title: "Film 2",
            duration: "1ч 42м",
            isOwn: true,
        },
        {
            title: "Film 3",
            duration: "1ч 42м",
            isOwn: true,
        },
    ];

    return (
        <>
            <Header isLogged={isLogged} />
            <main>
                <section className='movies'>
                    <SearchForm />
                    <MoviesCardList movies={savedMovies} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;
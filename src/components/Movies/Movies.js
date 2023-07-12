import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';



function Movies( {isLogged} ) {
    isLogged=true;
    let initialCards = [
        {
          title: "Film 1",
          duration: "1ч 42м",
          isOwn: false,
        },
        {
          title: "Film 2",
          duration: "1ч 42м",
          isOwn: false,
        },
        {
          title: "Film 3",
          duration: "1ч 42м",
          isOwn: false,
        },
        {
          title: "Film 4",
          duration: "1ч 42м",
          isOwn: false,
        },
        {
            title: "Film 5",
            duration: "1ч 42м",
            isOwn: false,
          },
          {
            title: "Film 6",
            duration: "1ч 42м",
            isOwn: false,
          },
    ]
    return(
        <>
        <Header isLogged={isLogged} />
        <main>
          <section className="movies">
        <SearchForm />
        <MoviesCardList movies={initialCards} />
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
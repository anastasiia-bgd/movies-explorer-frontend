import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { SHOW_MORE_DECKTOP, SHOW_MORE_TABLET, SHOW_MORE_MOBILE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader.js';
import SearchError from '../SearchError/SearchError.js';

function MoviesCardList({ allMovies, isSavedFilms, handleLikeClick, savedMovies, onCardDelete, isNotFound, isReqErr }) {

  const { pathname } = useLocation();
  const [shownMovies, setShownMovies] = useState(0);

  function shownCount() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(16);
    } else if (display > 1023) {
      setShownMovies(12);
    } else if (display > 800) {
      setShownMovies(8);
    } else if (display < 800) {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', shownCount);
    }, 500);

    return () => {
      setTimeout(() => {
        window.removeEventListener('resize', shownCount);
      });
    }
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + SHOW_MORE_DECKTOP);
    } else if (display > 1023) {
      setShownMovies(shownMovies + SHOW_MORE_TABLET);
    }
    else if (display < 1023) {
      setShownMovies(shownMovies + SHOW_MORE_MOBILE);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }
  
  return (
    <>
      {(
        <>
          {pathname === '/saved-movies' ? (
            <>
              <div className='movies__list-container'>
                <ul className="movies__list">
                  {allMovies.map((movie) => (
                    <MoviesCard
                      key={isSavedFilms ? movie._id : movie.id}
                      saved={getSavedMovieCard(savedMovies, movie)}
                      allMovies={allMovies}
                      movie={movie}
                      isSavedFilms={isSavedFilms}
                      handleLikeClick={handleLikeClick}
                      onCardDelete={onCardDelete}
                      savedMovies={savedMovies}
                    />
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className='movies__list-container'>
                <ul className="movies__list">
                  {allMovies.slice(0, shownMovies).map((movie) => (
                    <MoviesCard
                      key={isSavedFilms ? movie._id : movie.id}
                      saved={getSavedMovieCard(savedMovies, movie)}
                      allMovies={allMovies}
                      movie={movie}
                      isSavedFilms={isSavedFilms}
                      handleLikeClick={handleLikeClick}
                      onCardDelete={onCardDelete}
                      savedMovies={savedMovies}
                    />
                  ))}
                </ul>
              </div>
              <div className='movies__button-container'>
                {allMovies.length > shownMovies ? (
                  <button className="movies__button" onClick={showMore}>
                    Ещё
                  </button>
                ) : (
                  ''
                )}
              </div>
            </>
          )}
        </>
      )}



    </>

  )
}

export default MoviesCardList;
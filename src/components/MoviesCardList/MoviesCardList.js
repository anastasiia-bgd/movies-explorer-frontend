import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { SHOW_MORE_DECKTOP, SHOW_MORE_TABLET, SHOW_MORE_MOBILE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader.js';
import SearchError from '../SearchError/SearchError.js';

function MoviesCardList({ cards, isSavedFilms, handleLikeClick, savedMovies, onCardDelete, isNotFound, isReqErr, isLoading }) {
  
  const [shownMovies, setShownMovies] = useState(0);
  const { pathname } = useLocation();

  function shownCount() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(16);
    } else if (display > 1023) {
      setShownMovies(12);
    } else if (display > 800) {
      setShownMovies(8);
    } else if (display < 480) {
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
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={'Ничего не найдено'} />}
      {isReqErr && !isLoading && (
        <SearchError
          errorText={
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          }
        />
      )}
       {!isLoading && !isReqErr && !isNotFound && ( 
        <>
          {pathname === '/saved-movies' ? (
            <>
             <div className='movies__list-container'>
                <ul className="movies__list">
                  {cards.map((card) => (
                    <MoviesCard
                      key={isSavedFilms ? card._id : card.id}
                      saved={getSavedMovieCard(savedMovies, card)}
                      cards={cards}
                      card={card}
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
                  {cards.slice(0, shownMovies).map((card) => (
                    <MoviesCard
                      key={isSavedFilms ? card._id : card.id}
                      saved={getSavedMovieCard(savedMovies, card)}
                      cards={cards}
                      card={card}
                      isSavedFilms={isSavedFilms}
                      handleLikeClick={handleLikeClick}
                      onCardDelete={onCardDelete}
                      savedMovies={savedMovies}
                    />
                  ))}
                </ul>
             </div>
              <div className='movies__button-container'>
                {cards.length > shownMovies ? (
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
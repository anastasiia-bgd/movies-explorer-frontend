import React from 'react';
import './MoviesCard.css';
import { durationConverter } from '../../utils/utils.js';


function MoviesCard({ movie, isSavedFilms, handleLikeClick, onCardDelete, saved, savedMovies}) {
    console.log(movie)
    function onCardClick() {
        console.log(saved)
        if (saved) {
          onCardDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
        } else {
          handleLikeClick(movie);
        }
      }
    
      function onDelete() {
        onCardDelete(movie);
      }

      const cardSaveButtonClassName = `${saved ? 'card__like card__like_type_active' : 'card__like'
    }`;

    return(
        <li className='card'>
            <img className='card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt='Изображение карточки'/>
            <div className='card__description'>
                <h2 className='card__name'>{movie.nameRU}</h2>
                {isSavedFilms ? (
                <button className='card__like card__like_type_delete' onClick={onDelete}>
                </button>) : (
                    <button className={cardSaveButtonClassName} onClick={onCardClick}>
                    </button>
                )
}
            </div>
            <span className='card__duration'>{durationConverter(movie.duration)}</span>
        </li>
    )
}

export default MoviesCard;
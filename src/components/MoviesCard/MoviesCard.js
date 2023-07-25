import React from 'react';
import './MoviesCard.css';


function MoviesCard({ title, duration, isOwn, image}) {
    return(
        <li className='card'>
            <img className='card__image' src={`https://api.nomoreparties.co/${image}`} alt='Изображение карточки'/>
            <div className='card__description'>
                <h2 className='card__name'>{title}</h2>
                {isOwn?(
                <button className='card__like card__like_type_delete'>
                </button>) : (
                    <button className='card__like'>
                    </button>
                )
}
            </div>
            <span className='card__duration'>{duration}</span>
        </li>
    )
}

export default MoviesCard;
import React from 'react';
import './MoviesCard.css';
import cardImage from '../../images/cardImage.jpg';


function MoviesCard({ title, duration, isOwn}) {
    return(
        <li className='card'>
            <img className='card__image' src={cardImage} alt='Изображение карточки'/>
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
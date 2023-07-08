import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';





function MoviesCardList() {


    return(
      <>
        <ul className='movies__list'>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
        </ul>
        <div className='movies__button-container'>
        <button className='movies__button'>Еще</button>
        </div>
      </>
    )
}

export default MoviesCardList;
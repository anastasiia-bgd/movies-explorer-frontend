import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';





function MoviesCardList(props) {
  return (
    <div className='movies__list-container'>
    <ul className='movies__list'>
      {props.movies.map((movie) => {
        return (
          <li>
            <MoviesCard
              title={movie.title}
              duration={movie.duration}
              isOwn={movie.isOwn}
            />
            </li>
            )
           })}
          </ul>
          </div>
        )
      }

export default MoviesCardList;
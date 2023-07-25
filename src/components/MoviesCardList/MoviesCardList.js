import React, {useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ allMovies }) {

  // const [shownMovies, setShownMovies] = useState(0);

  // function shownCount() {
  //   const display = window.innerWidth;
  //   if (display > 1180) {
  //     setShownMovies(16);
  //   } else if (display > 1023) {
  //     setShownMovies(12);
  //   } else if (display > 800) {
  //     setShownMovies(8);
  //   } else if (display < 800) {
  //     setShownMovies(5);
  //   }
  // }

  // useEffect(() => {
  //   shownCount();
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.addEventListener('resize', shownCount);
  //   }, 500);

  //   return () => {
  //     setTimeout(() => {
  //       window.removeEventListener('resize', shownCount);
  //     });
  //   }
  // });

  // function showMore() {
  //   const display = window.innerWidth;
  //   if (display > 1180) {
  //     setShownMovies(shownMovies + SHOW_MORE_DECKTOP);
  //   } else if (display > 1023) {
  //     setShownMovies(shownMovies + SHOW_MORE_TABLET);
  //   }
  //   else if (display < 1023) {
  //     setShownMovies(shownMovies + SHOW_MORE_MOBILE);
  //   }
  // }



  return (
    <div className='movies__list-container'>
      <ul className='movies__list'>
        {allMovies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              title={movie.nameRU}
              duration={movie.duration}
              image={movie.image.url}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default MoviesCardList;
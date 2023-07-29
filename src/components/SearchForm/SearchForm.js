import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';






function SearchForm({ onSearchMovies, onFilter, isShortMovies }) {
 
    const [query, setQuery] = useState('');
    const location = useLocation();


      function handleChangeQuery(e) {
        setQuery(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
          onSearchMovies(query);
        }
      

      useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
          const localQuery = localStorage.getItem('movieSearch');
          setQuery(localQuery);
        }
      }, [location]);

    return(
        <section className='search-form'>
            <div className='search-form__container'>
            <form className='search-form__form' onSubmit={handleSubmit}>
                <input placeholder='Фильм' className='search-form__input' onChange={handleChangeQuery} value={query || ''}required></input>
                <button className='search-form__button' type='submit'>Найти</button>
            </form>
            </div>
            <FilterCheckbox isShortMovies={isShortMovies} onFilter={onFilter} />
        </section>
    )
}

export default SearchForm;
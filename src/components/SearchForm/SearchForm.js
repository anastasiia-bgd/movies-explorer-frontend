import React, { useRef } from 'react';
import './SearchForm.css';
// import loupe from '../../images/loupe.svg';
// import loupeWhite from '../../images/loupe-white.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


// 1 обработчик сабмита
// 2 получить из локального хранилища
// 3 перебрать и отфильтровать
// 4 отрисовать



function SearchForm({ setFilms }) {
    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFilms(ref.current.value)
    }

    return(
        <section className='search-form'>
            <div className='search-form__container'>
            <form className='search-form__form' onSubmit={handleSubmit}>
                <input ref={ref} placeholder='Фильм' className='search-form__input' required></input>
                <button className='search-form__button' type='submit'>Найти</button>
            </form>
            </div>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;
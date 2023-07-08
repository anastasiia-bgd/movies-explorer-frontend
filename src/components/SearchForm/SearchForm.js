import React from 'react';
import './SearchForm.css';
// import loupe from '../../images/loupe.svg';
// import loupeWhite from '../../images/loupe-white.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';




function SearchForm() {
    return(
        <section className='search-form'>
            <div className='search-form__container'>
            <form className='search-form__form'>
                <input placeholder='Фильм' className='search-form__input' required></input>
                <button className='search-form__button' type='submit'>Найти</button>
            </form>
            </div>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;
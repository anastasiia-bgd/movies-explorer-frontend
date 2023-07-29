import React, { useState, useEffect } from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { filterDuration, filterMovies } from '../../utils/utils';


function SavedMovies({ isLogged, savedMovies, onCardDelete }) {

    const [filteredMovies, setFilteredMovies] = useState(savedMovies); //отфильтрованные по запросу и чекбоксу
    const [isShortMovies, setIsShortMovies] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены
    const [searchQuery, setSearchQuery] = useState('');

    function onSearchMovies(query) {
        setSearchQuery(query);
    }

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
    }
    useEffect(() => {
        const moviesList = filterMovies(savedMovies, searchQuery);
        setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
    }, [savedMovies, isShortMovies, searchQuery]);

    useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFound(true);
        } else {
            setIsNotFound(false);
        }
    }, [filteredMovies]);



    return (
        <>
            <Header isLogged={isLogged} />
            <main>
                <section className='movies'>
                    <SearchForm onSearchMovies={onSearchMovies} onFilter={handleShortMovies} />
                    <MoviesCardList
                        isNotFound={isNotFound}
                        savedMovies={savedMovies}
                        isSavedFilms={true}
                        cards={filteredMovies}
                        onCardDelete={onCardDelete} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;
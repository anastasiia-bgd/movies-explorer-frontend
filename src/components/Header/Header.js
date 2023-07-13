import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import AccountButton from '../AccountButton/AccountButton';

function Header({ isLogged }) {

  const [isClicked, setIsClicked] = useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {!isLogged ? (
        <header className='header'>
          <Link to='/' className='header__logo'>
            <img src={logo} alt='логотип' />
          </Link>
          <nav className='header__button-container'>
            <Link to='/signup' className='header__button'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__button header__login-button'>
              Войти
            </Link>
          </nav>
        </header>
      ) : (
        <header className='header header_logged'>
          <Link to='/' className='header__logo'>
            <img src={logo} alt='логотип' />
          </Link>
          <nav className='header__nav'>
            <div className='header__movies-container'>
              <Link to='/movies' className='header__link'>
                Фильмы
              </Link>
              <Link to='/saved-movies' className='header__link'>
                Сохранённые фильмы
              </Link>
            </div>
            <div className='header__account-button'>
              <AccountButton />
            </div>
          </nav>
          <button onClick={handleOpen} className='header__burger-button'></button>
          {isClicked ? <Navigation handleClose={handleClose} /> : ''}
        </header>
      )}



    </>
  )
}

export default Header;
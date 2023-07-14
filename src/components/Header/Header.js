import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
              <NavLink to='/movies' className={({ isActive }) => (isActive ? "header__link_active" : "header__link")}>
                Фильмы
              </NavLink>
              <NavLink to='/saved-movies' className={({ isActive }) => (isActive ? "header__link_active" : "header__link")}>
                Сохранённые фильмы
              </NavLink>
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
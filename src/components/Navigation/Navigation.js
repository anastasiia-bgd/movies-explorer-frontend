import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';
import AccountButton from '../AccountButton/AccountButton';

function Navigation() {
  return (
    <div className='navigation'>
    <div className="navigation__overlay"></div>
    <div className='navigation__container'>
      <button className='navigation__close-button'></button>
      <nav className="navigation__nav">
    <NavLink to="/"  className={({ isActive }) => (isActive ? "navigation__link_active" : "navigation__link")}>
      Главная
    </NavLink>
    <NavLink to="/movies"  className={({ isActive }) => (isActive ? "navigation__link_active" : "navigation__link")}>
      Фильмы
    </NavLink>
    <NavLink to="/saved-movies"  className={({ isActive }) => (isActive ? "navigation__link_active" : "navigation__link")}>
      Сохранённые фильмы
    </NavLink>
  </nav>
  <NavLink to='/profile' className='navigation__account-button'>
              <AccountButton />
            </NavLink>
      </div>

     </div>
  );
}

export default Navigation;
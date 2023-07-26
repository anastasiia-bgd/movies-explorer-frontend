import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg'



function Form({ children, title, buttonText, question, linkText, link, isDisabled, onSubmit }) {

  return (
    <div className="form">
      <Link to="/" className="form__logo">
        <img src={logo} alt="логотип" />
      </Link>
      <h1 className="form__title">{title}</h1>
      <form className="form__container" id='form' onSubmit={onSubmit} noValidate>
        <div className='form__container-field'>
        {children}
        </div>
        <button type="submit" 
        disabled={isDisabled ? true : false}
        className={
          isDisabled
            ? 'form__button-save form__button-save_inactive'
            : 'form__button-save'
        }>
          {buttonText}
        </button>
      </form>
      <span className="form__text">
        {question}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </span>
    </div>
  )
}

export default Form;
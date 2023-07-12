import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin">
      <label className="form__field">
        Имя
      </label>
      <input
        name="name"
        className="form__input"
        placeholder="Имя"
        id="name-input"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="form__input-error"></span>
      <label className="form__field">
        E-mail
      </label>
      <input
        name="email"
        className="form__input"
        placeholder="Email"
        id="email-input"
        type="email"
        required />
      <span className="form__input-error"></span>
      <label className="form__field">
        Пароль
      </label>
      <input name="password"
        className="form__input"
        id="password-input"
        type="password" 
        placeholder="Пароль"
        required/>
      <span className="form__input-error"></span>
    </Form>
  );
}

export default Register;
import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';
import { REGEX_EMAIL, REGEX_NAME } from '../../utils/constants';
import useForm from '../../utils/useForm.js'


function Register({ onRegister}) {

  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    console.log(enteredValues)
    e.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
     >
      <label className="form__field">
        Имя
        <input
          name="name"
          className="form__input"
          // placeholder="Имя"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={enteredValues.name || ''}
          pattern={REGEX_NAME}
        />
      <span className="form__input-error">{errors.name}</span>
      </label>
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          // placeholder="Email"
          id="email-input"
          type="email"
          required
          onChange={handleChange}
          pattern={REGEX_EMAIL}
          value={enteredValues.email || ''}
        />
      <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__field"> 
        Пароль
        <input name="password"
          className="form__input"
          id="password-input"
          type="password"
          // placeholder="Пароль"
          required
          onChange={handleChange}
          value={enteredValues.password || ''}
        />
      <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
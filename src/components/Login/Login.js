import React from 'react';
import './Login.css';
import Form from '../Form/Form';
import useForm from '../../utils/useForm';
import { REGEX_EMAIL } from '../../utils/constants';


function Login({ onLogin }) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
    >
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
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
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          onChange={handleChange}
          value={enteredValues.password || ''}
          required/>
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  )
}

export default Login;
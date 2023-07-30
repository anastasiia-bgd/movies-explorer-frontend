import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../utils/useForm';
import { REGEX_EMAIL, REGEX_NAME } from '../../utils/constants';


function Profile({ isLogged, onUpdateUser, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();
    const [isLastValues, setIsLastValues] = useState(false);

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: enteredValues.name,
            email: enteredValues.email,
        });
    }

    useEffect(() => {
        if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
            setIsLastValues(true);
        } else {
            setIsLastValues(false);
        }

    }, [enteredValues]);

    return (
        <>
            <Header isLogged={isLogged} />
            <section className='profile'>
                <h1 className='profile__title'>Привет,  {currentUser.name}!</h1>
                <form id="form" className='profile__form' onSubmit={handleSubmit} noValidate>
                    <label className='profile__field'>
                        Имя
                        <input
                            name='name'
                            className='profile__field-value'
                            id="name-input"
                            type='text'
                            minLength="2"
                            maxLength="40"
                            required
                            onChange={handleChange}
                            value={enteredValues.name || ''}
                            pattern={REGEX_NAME}
                        />
                        <span className="profile__field-error">{errors.name}</span>
                    </label>
                    <div className="profile__border"></div>
                    <label className='profile__field'>
                        E-mail
                        <input
                            name="email"
                            className='profile__field-value'
                            id="email-input"
                            type='email'
                            onChange={handleChange}
                            pattern={REGEX_EMAIL}
                            value={enteredValues.email || ''} />
                        <span className="profile__input-error">{errors.email}</span>
                    </label>
                    <div className="profile__border"></div>
                    <button type='submit' disabled={!isFormValid ? true : false}
                        className={
                            !isFormValid || isLastValues
                                ? 'profile__button-save form__button-save_inactive'
                                : 'profile__button-save'
                        } >Редактировать</button>
                    <button type='button' className='profile__button_out' onClick={signOut}>Выйти из аккаунта</button>
                </form>
            </section>
        </>
    )
}

export default Profile;
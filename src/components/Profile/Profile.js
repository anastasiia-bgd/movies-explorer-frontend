import React from 'react';
import './Profile.css';
import Header from '../Header/Header';


function Profile({isLogged}) {
    isLogged = true;
    return(
      <>
    <Header isLogged={isLogged}/>
        <section className='profile'>
           <h1 className='profile__title'>Привет, Анастасия!</h1>
           <form className='profile__form'>
            <div className='profile__field-container profile__field-container_name'>
                <h2 className='profile__field'>Имя</h2>
                <input className='profile__field-value' type='text'  value='Анастасия'/>
            </div>
            <div className='profile__field-container profile__field-container_email'>
                <h2 className='profile__field'>E-mail</h2>
                <input className='profile__field-value' type='email' value='pochta@yandex.ru'/>
            </div>

            <div className='profile__button-container'>
           <button className='profile__button' type='submit'>Редактировать</button>
           <button className='profile__button profile__button_out'>Выйти из аккаунта</button>
           </div>
           </form>
        </section>
        </>
)
}

export default Profile;
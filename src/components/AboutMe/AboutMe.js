import React from 'react';
import './AboutMe.css';
import '../Main/Main.css';
import avatar from '../../images/avatar.jpg'


function AboutMe() {
  return (
    <section className='about-me' name='student' id='about-me'>
      <h2 className='about-me__title-main'>Студент</h2>
      <div className='about-me__profile'>
        <div className='about-me__info'>
          <h3 className='about-me__title'>Анастасия</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 32 года</h4>
          <p className='about-me__text'>В текущий момент я живу в Санкт-петербурге и работаю в нефтегазовой отрасли. Заинтересовавшись программированием, прошла 2 обучения в течение двух лет. И вот сейчас готова поменять свою сферу деятельности и ищу работу в качестве разработчика.</p>
          <a href='https://github.com/anastasiia-bgd' className='about-me__link' target='blank'>Github</a>
        </div>
        <img src={avatar} className='about-me__photo' alt='Аватарка' />
      </div>
    </section>
  )
}

export default AboutMe;
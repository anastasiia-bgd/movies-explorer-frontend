import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__link-container'>
        <p className='footer__copyright'>&copy; 2023</p>
          <a 
          className='footer__link' 
          href='https://practicum.yandex.ru/' 
          rel="noreferrer"
          target='blank'>
            Яндекс.Практикум
          </a>
          <a 
          className='footer__link' 
          href='https://github.com/anastasiia-bgd/' 
          target='blank'
          rel="noreferrer">
            Github
            </a>
      </div>
    </footer>
  )
}

export default Footer;
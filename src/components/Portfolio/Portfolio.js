import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg'



function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div>
      <ul className='portfolio__list'>
        <li>
          <a className='portfolio__link' href='https://anastasiia-bgd.github.io/how-to-learn/' target='blank'>
            <h3 className='portfolio__link-text'>Статичный сайт</h3>
            <img src={arrow} alt='Иконка стрелочки' />
          </a>
        </li>
        <li>
          <a className='portfolio__link' href='https://anastasiia-bgd.github.io/russian-travel/' target='blank'>
            <h3 className='portfolio__link-text'>Адаптивный сайт</h3>
            <img src={arrow} alt='Иконка стрелочки' />
          </a>
        </li>
        <li>
          <a className='portfolio__link' href='https://github.com/anastasiia-bgd/react-mesto-auth' target='blank'>
            <h3 className='portfolio__link-text'>Одностраничное приложение</h3>
            <img src={arrow} alt='Иконка стрелочки' />
          </a>
        </li>
      </ul>
      </div>
    </section>
  )
}

export default Portfolio;
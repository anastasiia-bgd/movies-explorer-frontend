import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <>
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
      <nav className='navtab'>
      <a  className='navtab__button' href='#about-project'>О проекте</a>
      <a className='navtab__button' href='#techs'>Технологии</a>
      <a className='navtab__button' href='#about-me'>Студент</a>
    </nav>
    </>
    
  );
};

export default Promo;
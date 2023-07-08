import React from "react";
import "./Promo.css";
// import NavTab from "../NavTab/NavTab";
import pic from "../../images/landing-logo.svg"

const Promo = () => {
  return (
    <>
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo_pic" src={pic} alt="Картинка" />
      </section>
      <section className='navtab'>
      <a  className='navtab__button' href='#about-project'>О проекте</a>
      <a className='navtab__button' href='#techs'>Технологии</a>
      <a className='navtab__button' href='#about-me'>Студент</a>
    </section>
    </>
  );
};

export default Promo;
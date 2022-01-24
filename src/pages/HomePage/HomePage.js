import React from 'react';
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={css.HomePage}>
            <h1>Welcome!!!</h1>
            <h2>Glad to see you on our site.</h2>
            <img src="https://fs01.vseosvita.ua/01003aw8-8633/001.jpg" alt="smile_like_double-like"/>
        </div>
    );
};

export {HomePage};
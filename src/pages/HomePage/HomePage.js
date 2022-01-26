import React from 'react';
import css from './Home.module.css'

const HomePage = () => {
    return (
        <div className={css.HomePage}>
            <h1>WELCOME TO US ...</h1>
            <img src="https://proprikol.ru/wp-content/uploads/2020/05/prikolnye-kartinki-na-zastavku-1.jpg" alt="Bear"/>
        </div>
    );
};

export {HomePage};
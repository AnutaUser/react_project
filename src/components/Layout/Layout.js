import React from 'react';
import {Outlet} from 'react-router-dom';

import css from './Layout.module.css';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

const Layout = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
};

export {Layout};
import React from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import css from "./Layout.module.css";

const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className={css.Outlet}>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export {Layout};
import React from 'react';
import {Link} from 'react-router-dom';

import css from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={css.User}>
            <h3>{id}. {name}</h3>
            <div>
                <Link to={id.toString()} state={user}><button  className={css.UserBtn}>User details</button></Link>
                <Link to={'albums'}><button  className={css.UserBtn}>User albums</button></Link>
            </div>

        </div>
    );
};

export {User};
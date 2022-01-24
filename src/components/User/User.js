import React from 'react';
import {Link} from 'react-router-dom';

import css from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={css.User}>
                <Link to={id.toString()} state={user}>
                    <h4>Id: {id}</h4>
                    <h3>Name: {name}</h3>
                </Link>
        </div>
    );
};

export {User};
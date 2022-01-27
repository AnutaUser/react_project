import React from 'react';

import css from './Album.module.css';

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div className={css.Album}>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <h2>Title: {title}</h2>
        </div>
    );
};

export {Album};
import React from 'react';

import css from './Album.module.css';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album;
        return (
        <div className={css.Album}>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <h2>Title: {title}</h2>
            <Link to={id.toString() + '/photos'}><button className={css.AlbumBtn}>Photos</button></Link>
        </div>
    );
};

export {Album};
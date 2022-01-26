import React from 'react';
import {Link} from 'react-router-dom';

import css from './Post.module.css';

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>
            <Link to={id.toString()} state={post}>
                    <h4 className={css.PostH4}>Id: {id}</h4>
                    <h3 className={css.PostH3}>Title: {title}</h3>
            </Link>
        </div>
    );
};

export {Post};
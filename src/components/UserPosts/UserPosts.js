import React from 'react';

import css from './UserPosts.module.css';

const UserPosts = ({post: {userId, id, title, body}}) => {

    return (
        <div className={css.UserPosts}>
            <b>
                <p>UserId: {userId}</p>
                <p>Id: {id}</p>
            </b>
            <h3>Title: {title}</h3>
            <p><b>Body:</b> {body}</p>
            <hr/>
        </div>
    );
};

export {UserPosts};
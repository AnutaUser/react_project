import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment: {postId, id, name, email, body}}) => {

    return (
        <div className={css.Comment}>
            <h4>PostId: {postId}</h4>
            <h4>Id: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Body: {body}</h4>
        </div>
    );
};

export {Comment};
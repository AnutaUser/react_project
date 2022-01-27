import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={css.Comment}>
            <b>
                <p>PostId: {postId}</p>
                <p>Id: {id}</p>
            </b>
            <h4 className={css.CommentH4}>Name: {name}</h4>
            <h4 className={css.CommentH4}>Email: {email}</h4>
            <p>Body: {body}</p>
            <hr/>
        </div>
    );
};

export {Comment};
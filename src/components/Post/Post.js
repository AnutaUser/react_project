import React from 'react';

import './Post.css'

const Post = ({post: {userId, id, title, body}}) => {
    return (
        <div className={'Post'}>
            <p>UserId: {userId}</p>
            <h3>Id: {id}</h3>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;
import React from 'react';

import './Post.css'

const Post = ({id, title, body}) => {
    return (
        <div className={'Post'}>
            <h4>Id: {id}</h4>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;
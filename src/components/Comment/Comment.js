import React from 'react';

import './Comment.css';

const Comment = ({id, name, email, body}) => {
    return (
        <div className={'Comment'}>
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;
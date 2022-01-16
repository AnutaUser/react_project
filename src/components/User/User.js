import React from 'react';

import './User.css';

const User = ({user, getUser}) => {
    const {id, name, email} = user;
    return (
        <div className={'User'}>
            <div>
                <h5>Id: {id}</h5>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
            </div>
            <button onClick={() => getUser(user)}>Details</button>
        </div>
    );
};

export default User;
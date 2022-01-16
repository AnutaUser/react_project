import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css';
import {userService} from "../../services/user.service";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        userService.getAll().then(user => setUsers(user))
    }, [])

    return (
        <div className={'Users'}>
                {users.map(user => <User
                key={user.id}
                user={user}
                getUser={getUser}
                />)}
        </div>
    );
};

export default Users;
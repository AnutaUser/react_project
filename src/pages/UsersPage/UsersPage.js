import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {userService} from '../../services';
import {Album, User} from '../../components';
import css from './Users.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);
    
    return (
        <div className={css.Users}>
            <div>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
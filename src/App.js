import React, {useState} from 'react';

import Users from "./components/Users/Users";
import DetailsUser from "./components/DetailsUser/DetailsUser";
import Posts from "./components/Posts/Posts";
import css from './App.module.css';
import {postService} from "./services/post.service";

const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    };

    const getUserId = (id) => {
        setUserId(id)
    };

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <DetailsUser user={user} getUserId={getUserId}/>}
            </div>
            {user && <Posts userId={userId}/>}
        </div>
    );
};
export default App;

import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from '../../services';
import {Post} from '../../components';
import css from './Posts.module.css';


const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    })

    return (
        <div className={css.Posts}>
            <div>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </div>
    )
};

export {PostsPage};
import {useLocation, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import {postService} from '../../services';
import css from './SingleUserPosts.module.css';

const SingleUserPostsPage = () => {
    const [post, setPost] = useState(null);
    const {userId} = useParams();

    useEffect(() => {
        postService.getByUserId(userId).then(value => setPost({value}))
    }, [])

    return (
        <div className={css.SingleUserPosts}>
            {post && (
                <div>
                    <h4>UserId: {post.userId}</h4>
                    <h4>Id: {post.id}</h4>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                </div>
            )
            }
        </div>
    )
};

export {SingleUserPostsPage};
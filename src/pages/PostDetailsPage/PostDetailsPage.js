import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams, Link} from 'react-router-dom';

import {postService} from '../../services';
import css from './PostDetails.module.css';

const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return;
        }
        postService.getById(id).then(value => setPost({...value}));
    }, [])


    return (
        <div className={css.PostDetails}>
            {post && (
                <div>
                    <div className={css.PostDetailsLink}>
                        <Link to='/posts'>Back</Link>
                    </div>

                    <p>UserId: {post.userId}</p>
                    <h3>Id: {post.id}</h3>
                    <h2>Title: {post.title}</h2>
                    <p>Body: {post.body}</p>

                    <div className={css.PostDetailsLink}>
                        <Link to={'comments'}>
                            <button>Comments</button>
                        </Link>
                    </div>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};
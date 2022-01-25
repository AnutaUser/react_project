import {Link, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import {postService} from '../../services';
import css from './SingleUserPosts.module.css';
import {UserPosts} from '../../components';

const SingleUserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        postService.getByUserId(userId).then(value => console.log(setPosts([...value])))
    }, [userId])

    return (
        <div className={css.SingleUserPosts}>
            {posts.map(post => <UserPosts key={post.id} post={post}/>)
            }
            <div className={css.SingleUserPostsBtn}>
                <Link to='/users'>
                    <button>Back to users</button>
                </Link>
            </div>
        </div>

    )
};

export {SingleUserPostsPage};
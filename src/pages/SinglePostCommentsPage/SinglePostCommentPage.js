import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {commentService} from '../../services';
import css from './SinglePostComment.module.css'

const SinglePostCommentPage = () => {
    const {postId} = useParams();
    console.log(useParams());
    const [comment, setComment] = useState(null);

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        commentService.getByPostId(postId).then(value => setComment({...value}));
    }, []);

    return (
        <div>
            {comment && (
                <div className={css.SinglePostComment}>
                    <p>PostId: {comment.postId}</p>
                    <p>Id: {comment.id}</p>
                    <h2>Name: {comment.name}</h2>
                    <h4>Email: {comment.email}</h4>
                    <p>Body: {comment.body}</p>
                    <button onClick={home}>Home</button>
                    <button onClick={back}>Back</button>
                </div>
            )}
        </div>
    );
};

export {SinglePostCommentPage};
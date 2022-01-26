import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {commentService} from '../../services';
import css from './PostDetailsComments.module.css'
import {Comment} from "../../components";

const PostDetailsCommentsPage = () => {
    const {postId} = useParams();
    console.log(useParams());
    const [comments, setComments] = useState([]);

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        commentService.getByPostId(postId).then(value => console.log(setComments([...value])));
    }, [postId]);

    return (
        <div className={css.SinglePostComment}>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
            <button onClick={home}>Home</button>
            <button onClick={back}>Back</button>
    ) </div>
    );
};

export {PostDetailsCommentsPage};
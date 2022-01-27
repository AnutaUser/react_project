import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import css from './PostDetailsComments.module.css'
import {commentService} from '../../services';
import {Comment} from "../../components";

const PostDetailsCommentsPage = () => {

    const {postId}= useParams();
    console.log(postId)

    const [comments, setComments] = useState([]);
    console.log(comments)

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
            commentService.getByPostId(postId).then(value => setComments([...value]));
    }, [postId]);

    return (
        <div className={css.PostDetailsComment}>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
            <button onClick={home}>Home</button>
            <button onClick={back}>Back</button>
    ) </div>
    );
};

export {PostDetailsCommentsPage};
import React, {useEffect, useState} from 'react';

import Comment from '../Comment/Comment';
import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(comments => comments.json())
            .then(comments => setComments(comments))
    }, []);
    return (
        <div className={'Comments'}>
            {comments.map(comments => <Comment
                key={comments.id}
                id={comments.id}
                name={comments.name}
                email={comments.email}
                body={comments.body}
            />)}
        </div>
    );
};

export default Comments;
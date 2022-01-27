import React from 'react';

const Photo = ({photo}) => {
    const  {title, thumbnailUrl} = photo;

    return (
        <div>
            <div>Title: {title}</div>
            <div>{thumbnailUrl}</div>
        </div>
    );
};

export {Photo};
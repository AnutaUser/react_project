import React from 'react';

import css from './Photo.module.css';

const Photo = ({photo}) => {
    const  {title, thumbnailUrl} = photo;

    return (
        <div className={css.Photo}>
            <div>Title: {title}</div>
            <div><img src={thumbnailUrl} alt={title}/></div>
        </div>
    );
};

export {Photo};

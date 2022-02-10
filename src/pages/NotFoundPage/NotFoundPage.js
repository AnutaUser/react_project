import React from "react";

import css from "./NotFound.module.css";

const NotFoundPage = () => {
    return (
        <div className={css.NotFound}>
            <img src="https://i.imgur.com/DZTbj.gif"
                 alt="Not-Found-Error" width={'50%'}/>
        </div>
    );
};

export {NotFoundPage};
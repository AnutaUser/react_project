import React from "react";

const Genre = ({genre:{id, name}}) => {

    return (
        <div>
            <b>{name}</b>
        </div>
    );
};

export {Genre};
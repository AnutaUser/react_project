import React from "react";

const Cat = ({cat:{id, name}, dispatch}) => {

    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: "delCat", payload: {id}})}>delete</button>
        </div>
    );
};

export {Cat};
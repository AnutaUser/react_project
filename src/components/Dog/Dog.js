import React from "react";

const Dog = ({dog: {id, name}, dispatch}) => {

    return (
        <div>
            {name}
            <button onClick={() => dispatch({type:"delDog", payload:{id}})}>delete</button>
        </div>
    );
};

export {Dog};
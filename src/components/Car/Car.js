import React from 'react';

const Car = ({car:{id, model, price, year}}) => {

    return (
        <div>
            <h4>Id: {id}</h4>
            <h3>Model: {model}</h3>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </div>
    );
};

export default Car;
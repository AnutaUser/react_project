import React from "react";
import {useDispatch} from "react-redux";

import {dellCarThunk} from "../../store";
import css from "./car.module.css";

const Car = ({car:{id, model, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(dellCarThunk({id}))}>Delete</button>
        </div>
    );
};

export {Car};
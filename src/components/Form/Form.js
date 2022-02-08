import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar, createCar} from "../../store";

const Form = () => {

    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({data}));
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register("model")} placeholder={"model"}/></label>
                <label>Price: <input type="number" {...register("price")} placeholder={"price"}/></label>
                <label>Year: <input type="number" {...register("year")} placeholder={"year"}/></label>
                <button>Save</button>
                <hr/>
            </form>
        </div>
    );
};

export {Form};
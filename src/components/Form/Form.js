import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carsServices} from "../../services/cars.services";

const Form = () => {
    const {
        register, handleSubmit, formState:{errors}
    } = useForm();

    const [formErr, setFormErr] = useState({});

    const submit = (car) => {
        carsServices.create(car).then(value => console.log(value)).catch(error => {
            setFormErr(error.response.data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formErr.model && <span>{formErr.model[0]}</span>}

                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formErr.price && <span>{formErr.price[0]}</span>}

                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formErr.year && <span>{formErr.year[0]}</span>}

                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
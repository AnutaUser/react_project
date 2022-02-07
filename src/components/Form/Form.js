import React from "react";
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";
import css from "./Form.module.css";

const Form = () => {

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo({todo: e.target.todo.value}));
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={submit} className={css.Form}>
                <label>List to do: <input type="text" name={"todo"} placeholder={"What to do?"}/></label>
                <button>Save</button>
            </form>
            <hr/>
        </div>
    );
};

export {Form};
import React, {useRef} from "react";

import css from "../../Form.module.css";

const Form = ({dispatch}) => {

    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type:'addCat', payload:{cat:catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type:'addDog', payload:{dog:dogInput.current.value}})
    }

    return (
        <div>

            <form onSubmit={form} className={css.Form}>
                <label>Add cat: <input type="text" placeholder={'cat'} ref={catInput}/></label>
                <button onClick={saveCat}>Save</button>
                <label>Add dog: <input type="text" placeholder={'dog'} ref={dogInput}/></label>
                <button onClick={saveDog}>Save</button>
            </form>

            <hr/>
        </div>
    );
};

export {Form};
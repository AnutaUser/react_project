import {useReducer} from "react";

import css from "./Forms.module.css";
import {Cat} from "./components";
import {Dog} from "./components";

const reducer = (state, action) => {

    // if (action.type === "cat") {
    //     return {...state, cats: state.cats + 1};
    // } else if (action.type === "dog") {
    //     return {...state, dog: state.dog + 1};
    // } else if (action.type === "delDog") {
    //     return {};
    // } else if (action.type === "delDog") {
    //     return {};
    // }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: 'Myrchyk', dogs: 'Tuzik'});
    const save = () => {
        dispatch({...state, cats: state.cats})
        console.log(dispatch())
    };


    const pats = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return (

        <div>
            <div className={css.Forms}>
                <form onSubmit={pats}>
                    <label>Add CAT: <input type="text" value={state.cats} name={"cats"} onChange={save}/></label>
                    <button>Save</button>
                </form>

                <form>
                    <label>Add DOG: <input type="text" value={state.dogs} onChange={save}/>
                        <button>Save</button>
                    </label>
                </form>
            </div>

            <hr/>
        </div>
    );
}

export default App;

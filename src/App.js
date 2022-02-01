import {useReducer} from "react";

import {Cats, Dogs, Form} from "./components";
import css from "./Form.module.css";

const reducer = (state, action) => {
    if (action.type === 'addCat') {
        return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
    }
    if (action.type === 'addDog') {
        return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
    }
    if (action.type === 'delCat') {
        return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
    }
    if (action.type === 'delDog') {
        return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
    } else {
        return state;
    }
}

function App() {

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    return (

        <div>
            <Form dispatch={dispatch}/>
            <div className={css.Pets}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
}

export default App;

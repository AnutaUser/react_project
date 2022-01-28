import {useReducer} from "react";

const reducer = (state, action) =>{


    return state;
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: 0, dogs: null})

    return (
        <div>
            <div>{state.cats}</div>
            <div>{state.dogs}</div>
            <form>All cats: <input type="text"/><button>Save</button></form>
            <form>All dogs: <input type="text"  /><button>Save</button></form>

        </div>
    );
}

export default App;

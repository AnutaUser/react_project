import {useReducer} from "react";

const reducer = (state, action) => {

    if (action.type === 'inc1') {
        return {...state, count1: state.count1 + 1}
    }
    if (action.type === 'dec1') {
        return {...state, count1: state.count1 - 1}
    }
    if (action.type === 'res1') {
        return {...state, count1: 10};
    }

    if (action.type === 'inc2') {
        return {...state, count2: state.count2 + 1};
    }
    if (action.type === 'dec2') {
        return {...state, count2: state.count2 - 1}
    }
    if (action.type === 'res2') {
        return {...state, count2: 100}
    }


    if (action.type === 'inc3') {
        return {...state, count3: state.count3 + 1}
    }
    if (action.type === 'dec3') {
        return {...state, count3: state.count3 - 1}
    }
    if (action.type === 'res3') {
        return {...state, count3: action.payload}
    }

    return state;
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'res1'})}>RES</button>
            </div>

            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'res2'})}>RES</button>
            </div>

            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'res3', payload: 1000})}>RES</button>
            </div>

        </div>
    );
}

export default App;

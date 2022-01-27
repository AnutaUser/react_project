// import {useReducer} from "react";
//
// const reducer = (state, action) => {
//
//     if (action.type === 'inc') {
//         return {...state, count1: state.count1 + 1}
//     }else
//     if (action.type === 'dec') {
//         return {...state, count1: state.count1 - 1}
//     }else
//     if (action.type === 'res') {
//         return {...state, count1: 0}
//     }
//
//     // switch (action.type) {
//     //     case 'inc':
//     //         return {...state, count1: state.count1 + 1}
//     //     case 'dec':
//     //         return {...state, count1: state.count1 - 1}
//     //     case 'res':
//     //         return {...state, count1: 0};
//     // }
//
//     return state;
// }
//
// function App() {
//     const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 5});
//
//     return (
//         <div>
//             <div>{state.count1}</div>
//             <div>{state.count2}</div>
//             <button onClick={() => dispatch({type:'inc'})}>increment</button>
//             <button onClick={() => dispatch({type:'dec'})}>decrement</button>
//             <button onClick={() => dispatch({type:'res'})}>reset</button>
//         </div>
//     );
// }
//
// export default App;
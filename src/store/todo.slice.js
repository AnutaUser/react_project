import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: "todoSlice",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().getTime(),
                name: action.payload.todo,
                status: false
            })
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status
        },
        deleteTodo: (state, action) =>{
            const findIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos.splice(findIndex, 1)
        }
    }
});

const todoReducer = todoSlice.reducer;

export default todoReducer;
export const {addTodo, changeStatus, deleteTodo} = todoSlice.actions;
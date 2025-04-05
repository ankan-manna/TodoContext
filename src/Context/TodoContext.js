import { createContext } from "react";

const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"todo 1",
        completed:false
    }],
    addTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
});

export default TodoContext;
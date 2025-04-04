import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider=({children})=>{
    const [todos,setTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos((prev)=>[...prev,{id:Date.now(),...todo}]);
    }
    const editTodo=(id,todo)=>{
       setTodos((prev)=>prev.map((ele)=>ele.id===id?todo:ele));
    }
    const deleteTodo=(id)=>{
        setTodos((prev)=>prev.filter((ele)=>ele.id!==id))
    }
    return(
        <TodoContext.Provider value={{todos,addTodo,editTodo,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo=()=>{
    return(useContext(TodoContext))
}

export default TodoContextProvider;
export {useTodo};
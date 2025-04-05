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
    const toggleCompleted=(id)=>{
        setTodos((prev=>prev.map((ele)=>ele.id==id?{...ele,completed:true}:ele)))
    }
    return(
        <TodoContext.Provider value={{todos,addTodo,editTodo,deleteTodo,toggleCompleted}}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo=()=>{
    return(useContext(TodoContext))
}

export default TodoContextProvider;
export {useTodo};
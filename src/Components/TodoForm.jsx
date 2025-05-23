import { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";

function TodoForm() {
    const [mytodo,setMytodo]=useState("");
    const {addTodo}=useContext(TodoContext)

    const add=(e)=>{
        e.preventDefault();
        if(!mytodo.length) return;
        addTodo({
            id:Date.now(),
            todo:mytodo,
            completed:false
        })

        setMytodo("")
    }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={mytodo}
                onChange={(e)=>setMytodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit"  className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



// import './App.css'
// import TodoForm from './Components/TodoForm'
// import TodoItem from './Components/TodoItem'
// import TodoContextProvider, { useTodo } from './Context/TodoContextProvider'

// function App() {
//  const {todos}=useTodo()
//   return (
//     <>
//       <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                         <TodoContextProvider>
//                           <TodoForm/>
//                         </TodoContextProvider>
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         <TodoContextProvider>

//                         {
//                           todos.map((todo)=>( <div key={todo.id}
//                             className='w-full'
//                             >
//                               <TodoItem todo={todo} />
//                             </div>))
//                         }
//                         </TodoContextProvider>
//                     </div>
//                 </div>
//             </div>
//     </>
//   )
// }

// export default App
//===================================================================================

import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import TodoContextProvider, { useTodo } from './Context/TodoContextProvider'

function App() {
  return (
    <TodoContextProvider>
      <TodoMain />
    </TodoContextProvider>
  )
}

const TodoMain = () => {
  const { todos } = useTodo();

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { motion } from "framer-motion";

const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, {
            task: todo,
            completed: false,
        }]);
        console.log(todos);
    }
    const toggleComplete = task => {
        setTodos(todos.map(todo => todo.task === task ? {
            ...todo, completed: !todo.completed
        } : todo
        ))
    } 
    const deleteTodo = task => {
        setTodos(todos.filter(todo => todo.task !== task))
    }

  return (
    <motion.div
    drag
    dragConstraints={{
      right: 50, 
    }} className="mx-auto w-64 mt-2 bg-[#265073] text-white bg-opacity-75 px-4 py-5 justify-start items-center  rounded-lg shadow-md">
        <TodoForm addTodo={addTodo} />
        <div className='my-4 mx-auto overflow-y-auto max-h-40'>
             {todos.map((todo, index) => (
             <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))}
        </div>
       
    </motion.div>
  );
}

export default TodoWrapper
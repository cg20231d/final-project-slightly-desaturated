import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'

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
    <div className='p-5 mt-2 bg-white rounded-lg shadow-md '>
        <TodoForm addTodo={addTodo} />
        <div className='my-2'>
             {todos.map((todo, index) => (
             <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))}
        </div>
       
    </div>
  );
}

export default TodoWrapper
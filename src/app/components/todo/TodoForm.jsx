import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
   <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder='Add Task' value={value} className=' border-b-2  border-white ring-transparent focus:outline-none p-2 w-4/5 bg-transparent ' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='p-2 w-1/5 text-2xl text-white rounded-r-lg'>+</button>
   </form>
  )
}

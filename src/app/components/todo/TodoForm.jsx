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
    <input type="text" placeholder='Add Task' value={value} className='p-2 w-4/5 border border-r-0 border-black rounded-l-lg' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='p-2 w-1/5 border border-black bg-black text-white rounded-r-lg'>+</button>
   </form>
  )
}

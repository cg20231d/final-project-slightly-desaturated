import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div  className='my-2 flex justify-between items-center shadow-md rounded-lg hover:bg-gray-200'>
        <div onClick={() => toggleComplete(task.task)} className={`${task.completed ? 'line-through text-gray-500 w-10/12 p-3' : 'w-10/12 p-3'}` }>{task.task}</div>
        <div className='w-2/12 p-3' onClick={() => deleteTodo(task.task)} >
            <svg className="w-[16px] h-[16px] text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
        </div>
    </div>
   
  )
}

import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md'

const Todo = ({todo,index,completeTodo,removeTodo}) => {
  const isCompleted=todo.isCompleted;
  
  
  return (
    <div className="todo">    
      {isCompleted}
      
        <span style={{ textDecoration: (isCompleted ? "line-through" : "" )}}>{todo.text}</span> 
       <button onClick={()=>completeTodo(index)}><AiOutlineCheck/></button>
       <button onClick={()=>removeTodo(index)} ><MdDeleteForever/></button>
    </div>

  )
}

export default Todo;
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  const [todos,setTodos]=useState([
    {text:'Learn React',isCompleted:false},
    {text:'Make a Portfolio',isCompleted:false},
    {text:'Make a Todo App',isCompleted:false},
  ]);

  

   const addTodo =(text)=>{
     
      const newTodos=[...todos,{text}];
      setTodos(newTodos);
     
  }

  const completeTodo =(index)=>{
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }
  
  const removeTodo =(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="todo-list">
        
      <AddTodo addTodo={addTodo}/>
      {todos.map((todo,index)=>(
           <Todo key={index} 
           todo={todo}
           index={index}
           completeTodo={completeTodo}
           removeTodo={removeTodo}/>
      ))}
     </div>
     </div>
  );
}

export default App;

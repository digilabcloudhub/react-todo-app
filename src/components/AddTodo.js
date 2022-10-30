import React,{useState} from 'react'

const AddTodo = ({addTodo}) => {
    const [val,setVal]=useState('');
   
    const addVal =(e)=>{
        setVal(e.target.value);
    }
    
    const handleSubmit =(e)=>{
      e.preventDefault();
       if (!val) return;  
        addTodo(val);
        setVal('');
    }
  return (
    <>
    <form  onSubmit={handleSubmit}>
       <span>Add Task :</span>
       <input type="text" value={val} onChange={addVal}></input>
       <button type="submit"  >Submit</button>

    </form>
    </>
  )
}

export default AddTodo
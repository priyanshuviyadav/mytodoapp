import { nanoid } from 'nanoid';
import { useState } from 'react'

export default function AddTodo({ setTodo, handleMarkAllTodo,setFilter }) {
  const [value, setValue] = useState("");

  const handleAddNewTodo = () => {
    const todoObj = {
      id: nanoid(),
      value: value,
      isCompleted: false,
      isDeleted: false,
    };

    setTodo((prevValue) => [...prevValue, todoObj]);
    setValue("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

  };


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>

          <input type="text" className='inputtxt' placeholder='Enter Todo' value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={handleAddNewTodo} >+</button>
          <button onClick={() => setTodo([])}>Delete All</button>
          <button onClick={handleMarkAllTodo}>Mark All</button>
          
        <button onClick={()=>setFilter("all")}>Show All</button>
        <button onClick={()=>setFilter("completed")}>Show All Completed</button>

        <button onClick={()=>setFilter("deleted")}>Show All Deleted</button>
        </form>
      </div>
      
    </>

  );
}

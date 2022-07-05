import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


const dataArr=[
  {
    id:1,
    value:"task1",
    isCompleted:false,
    isDeleted:false,
  },
  {
    id:2,
    value:"task2",
    isCompleted:false,
    isDeleted:false,
  },
  {
    id:3,
    value:"task3",
    isCompleted:false,
    isDeleted:false,
  },
];

export default function Todo() {

  const [todo, setTodo] = useState(dataArr);
  const [filter,setFilter] = useState("all");


  

  const handleMarkAllTodo = () => {
    const markedTodos = todo.map((item) => {
      return { ...item, isCompleted: true };
    });
    setTodo(markedTodos);
  };

  const deleteItem = (id) => {

    const modifiedTodos = todo.map((item) => {
      if (item.id === id) {
        const modifiedTodo = { ...item, isDeleted: true };
        return modifiedTodo;
      } else {
        return item;
      }
    });

    setTodo(modifiedTodos);
  };

  const isCompletedTodo = (id) => {
    const completeData = todo.map((element) => {
      if (element.id === id) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      } else {
        return element;

      }
    });
    setTodo(completeData);

  };



  return (
    <div>
      <h1>Todo</h1>
      <div>
        <AddTodo setTodo={setTodo} handleMarkAllTodo={handleMarkAllTodo} setFilter={setFilter} />



          <TodoList todo={todo} deleteItem={deleteItem} isCompletedTodo={isCompletedTodo} filter={filter} />
        

      </div>
    </div>
  );
};

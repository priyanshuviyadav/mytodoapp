import TodoItem from "./TodoItem";

export default function TodoList({ todo, deleteItem, filter,isCompletedTodo }) {

  const filterMap = {
    all:()=>true,
    completed:(item)=>item.isCompleted===true,
    deleted:(item)=>item.isDeleted===true,
  };
  return (
    <>
      {todo.length === 0 ? (
        <h3>no data present </h3>
      ) : (
        <div>
          <h1>Todo - List</h1>
          <ol>
            {todo.filter(filterMap[filter]).map((todo) => {
              return (
                <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} isCompletedTodo={isCompletedTodo} />
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
}

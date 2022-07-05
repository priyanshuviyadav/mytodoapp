export default function TodoItem({
  todo: { id, value, isCompleted },
  deleteItem, isCompletedTodo,
}) {
  const style = {
    margin: "8px 0 ",
    padding: "0 8px",
    width: "200px",
    textDecoration: isCompleted === true ? "line-through" : "none",
    color: isCompleted === true ? "blue" : "black",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",

  };

  return (
    <>
      <div className="btn-box">
        <p style={style}>{value}</p>
        <button className="completetodo" onClick={() => isCompletedTodo(id)}>✓</button>
        <button className="deletebtn" onClick={() => deleteItem(id)}>X</button>



      </div>
    </>
  );
}

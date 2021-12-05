import "./TodoItem.css";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
  handleDelete: (id: number) => void;
  setCompleted: (id: number) => void;
}

const TodoItem = ({
  id,
  title,
  completed,
  handleDelete,
  setCompleted,
}: ITodoItem) => {
  return (
    <div className="todoItem">
      <p onClick={() => setCompleted(id)} className="todoItem__title">
        {completed ? <del>{title}</del> : title}
      </p>
      <div className="btn-container">
        <button
          onClick={() => handleDelete(id)}
          className="todoItem___delete-btn todoItem__btn"
        >
          delete
        </button>
        <button className="todoItem__update-btn todoItem__btn">update</button>
      </div>
    </div>
  );
};

export default TodoItem;

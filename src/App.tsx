import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

interface ITodoList {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const states = ["todoInput", "updateInput"];
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [todoInput, setTodoInput] = useState("");
  const [currentState, setCurrentState] = useState(states[0]);

  const onItemAdd = () => {
    if (!todoInput) {
      alert("Please enter something to the input");
    } else {
      const newObject = {
        id: todoList.length + 1,
        title: todoInput,
        completed: false,
      };
      setTodoList([...todoList, newObject]);
      setTodoInput("");
    }
  };

  const setCompleted = (id: number) => {
    const isItemInState = todoList.find((item) => item.id === id);
    if (isItemInState) {
      const newTodoList = todoList.map((item) =>
        item.id === id ? { ...item, completed: !isItemInState.completed } : item
      );
      setTodoList(newTodoList);
    }
  };

  const handleDelete = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">To Do App! 😃</h1>
        <div className="app__header-input-container">
          <input
            className="app__header-input"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            type="text"
            placeholder="Enter your todo"
          />
          <button onClick={onItemAdd} className="app__header-input-button">
            Add
          </button>
        </div>
      </div>
      <div className="app__body">
        {todoList.map(({ id, title, completed }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            setCompleted={setCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

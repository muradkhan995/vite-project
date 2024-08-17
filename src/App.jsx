// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const maxTasks = 10; // Define the maximum number of tasks

  const addTodo = () => {
    if (input.trim() !== "") {
      if (todos.length < maxTasks) {
        setTodos([...todos, { text: input, completed: false }]);
        setInput("");
      } else {
        alert("You have reached the maximum number of tasks.");
      }
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const remainingTasks = maxTasks - todos.length;

  return (
    <div className="App">
      <h2>React js + Vite Web Apps</h2>
      <h1>To-Do List</h1>
      <div className="todo-list">
        <input
          type="text"
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
        <p className="remaining-tasks">Remaining tasks: {remainingTasks}</p>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <span onClick={() => toggleComplete(index)}>{todo.text}</span>
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

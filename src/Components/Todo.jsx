import React, { useState } from "react";
import styles from "./Styles/todo.module.css";

function generateId() {
  return Date.now(); // Generates a unique ID based on the current timestamp
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return; // Prevent empty todos
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      handleSubmit()
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="userInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
        className={styles.input}
        onKeyDown={handleEnter}
      />

      <button
        className={styles.add}
        onClick={handleSubmit}
      >
        plus
      </button>

      <ul className={styles.todosList}>
        {todos.map(({ text, id }) => (
          <li key={id} className={styles.todo}>
            <span>{text}</span>
            <button
              className={`${styles.close} ${styles.button}`}
              onClick={() => removeTodo(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

import React from "react";
import "./Todo.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="app">
      <h2>Todo_List</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import { useDispatch } from "react-redux"; //input icin
import { addTodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch(); //hook oldugu icin yukari yazildi

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Hand", text);
    if (text) {
      dispatch(addTodo(text));
      setText(""); //value demiyoruz , o button ile ilgili.. bos girmeyi engellemek icin
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
      />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;

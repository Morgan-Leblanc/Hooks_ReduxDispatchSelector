import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const addAction = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: uuid(), name: todo, complete: false },
    });
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        placeholder="Add a todo"
        value={todo}
        onChange={onChange}
      />
      <button onClick={() => addAction()}>Add Todo</button>
    </div>
  );
}

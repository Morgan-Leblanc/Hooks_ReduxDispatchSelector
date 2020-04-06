import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteAction = (id) => {
    let result = window.confirm("Want to delete?");
    if (result) {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };
  const itsDone = (id) => {
    let result = window.confirm("After this elements will be removed");
    if (result) {
      dispatch({ type: "TOGGLE_TODO", payload: id });
    }
  };
  return (
    <div>
      <ul>
        {todo.map((todos) => (
          <div>
            <input
              type="checkbox"
              checked={todos.complete}
              onChange={() => itsDone(todos.id)}
            />
            <li key={todos.id}> {todos.name}</li>
            <button onClick={() => deleteAction(todos.id)}> X </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

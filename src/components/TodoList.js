import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalConfirm from "./ModalConfirm";

export default function TodoList() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const itsDone = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
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
            <ModalConfirm
              todos={todos}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

/////  Methode de validation via le navigateur let result = window.confirm("some text") if(result)...

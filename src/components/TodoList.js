import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);

  const deleteAction = (id) => {
    if (display) {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };

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
            <button onClick={() => setDisplay(!display)}> X </button>
            {display ? (
                <div>
                <p>Voulez vous vraiment supprimer cet élément ?</p>
                <button onClick={() => deleteAction(todos.id)}> Yes</button>
                <button onClick={() => setDisplay(!display)}> No</button>
              </div>
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
}

/////  Methode de validation via le navigateur let result = window.confirm("some text") if(result)...
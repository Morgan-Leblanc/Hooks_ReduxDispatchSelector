import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function ModalConfirm({ todos }) {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const deleteAction = (id) => {
    if (display) {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };
  return (
    <div>
      <button onClick={() => setDisplay(!display)}> X </button>
      {display ? (
        <div>
          <p>Voulez vous vraiment supprimer cet élément ?</p>
          <button onClick={() => deleteAction(todos.id)}> Yes</button>
          <button onClick={() => setDisplay(!display)}> No</button>
        </div>
      ) : null}
    </div>
  );
}

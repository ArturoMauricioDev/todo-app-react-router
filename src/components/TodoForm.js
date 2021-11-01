import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState("");
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onChangeText = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="text-todo">Escribe un nuevo TODO</label>
      <textarea
        name=""
        id="text-todo"
        cols="30"
        rows="10"
        placeholder="Agregue su tarea"
        value={newTodoValue}
        onChange={onChangeText}
      ></textarea>
      {/* <div className="todoForm__buttonContainer"> */}
      <span className="todoForm-button__cancel" onClick={onCancel}>
        <ImCross />{" "}
      </span>
      <button
        type="submit"
        className="todoForm-button todoForm-button__add"
        disabled={newTodoValue.length <= 0}
      >
        Añadir
      </button>
      {/* </div> */}
    </form>
  );
}

export { TodoForm };

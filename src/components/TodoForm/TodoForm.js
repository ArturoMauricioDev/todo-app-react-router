import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function TodoForm({ submitEvent, submitText, title, defaultTodoText }) {
  const navigate = useNavigate();
  console.log(defaultTodoText);
  const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || "");

  useEffect(() => {
    setNewTodoValue(defaultTodoText);
  }, [defaultTodoText]);

  const onCancel = () => {
    navigate("/");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodoValue);
    navigate("/");
  };
  const onChangeText = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="text-todo">
        {/* {Escribe un nuevo TODO} */}
        {title}
      </label>
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
        disabled={newTodoValue?.length <= 0}
      >
        {/* Añadir */}
        {submitText}
      </button>
      {/* </div> */}
    </form>
  );
}

export { TodoForm };

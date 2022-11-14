import React from "react";

function CreateTodoButton({ onClick }) {
  return (
    <button className="create-todo-button" onClick={onClick}>
      +
    </button>
  );
}

export { CreateTodoButton };

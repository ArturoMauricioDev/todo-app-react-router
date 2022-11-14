import React from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";

const EditTodoPage = () => {
  return (
    <div>
      <TodoForm
        submitEvent={() => console.log("Editar todo")}
        submitText="Editar"
        title="Edita tu TODO"
      />
    </div>
  );
};

export { EditTodoPage };

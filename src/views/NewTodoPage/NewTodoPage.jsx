import React from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";

const NewTodoPage = () => {
  return (
    <div>
      <TodoForm
        submitEvent={() => console.log("añadir todo")}
        submitText="Añadir"
        title="Escribe un nuevo TODO"
      />
    </div>
  );
};

export { NewTodoPage };

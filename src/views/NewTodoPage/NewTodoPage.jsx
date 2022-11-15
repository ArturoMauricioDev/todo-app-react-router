import React from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { useTodos } from "../../hooks/useTodos";

const NewTodoPage = () => {
  const { addTodo } = useTodos().stateUpdaters;
  return (
    <div>
      <TodoForm
        submitEvent={(text) => addTodo(text)}
        submitText="Añadir"
        title="Escribe un nuevo TODO"
      />
    </div>
  );
};

export { NewTodoPage };

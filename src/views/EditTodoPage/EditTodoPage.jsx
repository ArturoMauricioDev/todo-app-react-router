import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { useTodos } from "../../hooks/useTodos";

const EditTodoPage = () => {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  const { editTodo } = useTodos().stateUpdaters;
  const { getTodo } = useTodos().states;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else {
    todoText = getTodo(id);
  }

  return (
    <div>
      <TodoForm
        submitEvent={(newText) => editTodo(id, newText)}
        submitText="Editar"
        title="Edita tu TODO"
        defaultTodoText={todoText}
      />
    </div>
  );
};

export { EditTodoPage };

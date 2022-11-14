import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../hooks/useTodos";

import { TodoHeader } from "../../components/TodoHeader/TodoHeader";
import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../../components/Modal/Modal";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { EmptyTodos } from "../../components/EmptyTodos/EmptyTodos";
import { ChangeAlertWithStorageListener } from "../../components/ChangeAlertWithStorageListener/ChangeAlert";

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();

  const { filteredText, totalTodos, completedTodos, searchValue } = states;
  const {
    toggleTodo,
    deleteTodo,
    setSearchValue,
    EditTodo,
    addTodo,
    setSincronizedItem,
  } = stateUpdaters;

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        filteredText={filteredText}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p className="empty-todos">No hay resultados para: {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.id)}
            onEdit={() => navigate("/edit/" + todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      ></TodoList>

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <CreateTodoButton
        onClick={() => navigate("/new")}
        // openModal={openModal}
        // setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener sincronize={setSincronizedItem} />
    </>
  );
}
export { HomePage };

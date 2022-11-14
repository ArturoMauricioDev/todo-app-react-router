import { useState, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const [todos, saveTodos, setSincronizedItem] = useLocalStorage(
    "TODOS_V2",
    []
  );

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredText = useMemo(
    () =>
      todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      }),
    [todos, searchValue]
  );

  const toggleTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id,
    });

    saveTodos(newTodos);
  };

  const EditTodo = (id) => {
    // const todoIndex = todos.findIndex((todo) => todo.id === id);
    // const newTodos = [...todos];
    // newTodos[todoIndex].completed = !todos[todoIndex].completed;
    // saveTodos(newTodos);
    console.log("edit");
  };

  const states = {
    totalTodos,
    completedTodos,
    searchValue,
    filteredText,
    openModal,
  };
  const stateUpdaters = {
    setSearchValue,
    toggleTodo,
    deleteTodo,
    EditTodo,
    addTodo,
    setSincronizedItem,
  };

  return { states, stateUpdaters };
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }

  const idList = todoList.map((todo) => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}
export { useTodos };

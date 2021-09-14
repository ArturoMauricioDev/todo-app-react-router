import React, { useMemo, useState, useEffect } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de introducción a react', completed: false },
//   { text: 'Preparar', completed: false },
// ]



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredText = useMemo(() =>
    todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }), [todos, searchValue]
  )



  const toggleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  console.log('render antes del useeffect');

  useEffect(() => {
    console.log('use efect')
    return () => {
      console.log('return useeffect')
    }
  }, [])
  console.log('render despues del useeffect');



  return (
    <AppUI totalTodos={totalTodos} completedTodos={completedTodos} searchValue={searchValue} setSearchValue={setSearchValue} filteredText={filteredText} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

  );
}

export default App;

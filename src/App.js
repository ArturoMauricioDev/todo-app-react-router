import React from "react"
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
//import './App.css';

function App() {

  const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Tomar el curso de introducción a react', completed: false },
    { text: 'Preparar', completed: false },
  ]

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>

  );
}

export default App;

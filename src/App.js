import React, { useMemo, useState } from "react"
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de introducción a react', completed: false },
  { text: 'Preparar', completed: false },
]

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos)

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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {filteredText.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete = {()=>toggleTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>

  );
}

export default App;

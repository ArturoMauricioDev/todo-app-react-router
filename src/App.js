import React from 'react';
import { useTodos } from './hooks/useTodos'
import { TodoHeader } from './components/TodoHeader'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm';

function App() {
  const { filteredText,
    toggleTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    addTodo
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {filteredText.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>


      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal} />
    </>
  )

}




export default App;

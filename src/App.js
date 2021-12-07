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
import { EmptyTodos } from './components/EmptyTodos'
import { ChangeAlertWithStorageListener } from './components/ChangeAlert';

function App() {
  const { states, stateUpdaters} = useTodos();

  const{ filteredText,
    totalTodos,
    completedTodos,
    searchValue,
    openModal,
  } = states;
  const {     
    toggleTodo,
    deleteTodo,
    setSearchValue,
    setOpenModal,
    addTodo,
    setSincronizedItem
  } = stateUpdaters;

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

      <TodoList
        filteredText={filteredText}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )
        }
      >
        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )
        } */}

      </TodoList>

      {/* <TodoList>
        {filteredText.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList> */}


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

      <ChangeAlertWithStorageListener
        sincronize={setSincronizedItem}
      />
    </>
  )
}
export default App;
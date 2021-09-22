import React, { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm';

function AppUI() {

    const { filteredText,
        toggleTodo,
        deleteTodo,
        openModal,
    } = useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {filteredText.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>


            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton />
        </>
    )
}

export { AppUI }
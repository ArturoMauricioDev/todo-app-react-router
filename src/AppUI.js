import React from 'react';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

function AppUI({
    totalTodos, completedTodos, searchValue, setSearchValue, filteredText, toggleTodo, deleteTodo
}) {
    return (
        <>
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {filteredText.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    )
}

export { AppUI }
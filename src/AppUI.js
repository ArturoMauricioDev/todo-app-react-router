import React from 'react';
import { TodoContext } from './context/TodoContext';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

function AppUI() {
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({ filteredText,
                    toggleTodo,
                    deleteTodo }) => {
                    return (
                        <TodoList>
                            {filteredText.map(todo => (
                                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                            ))}
                        </TodoList>
                    )
                }}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </>
    )
}

export { AppUI }
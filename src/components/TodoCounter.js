import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <h2 className="todo-counter">
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
    )
}

export { TodoCounter }
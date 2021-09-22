import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function CreateTodoButton() {
    const { openModal, setOpenModal } = useContext(TodoContext)
    const onClickButton = () => {
        setOpenModal(!openModal)
    }
    return (
        <button className="create-todo-button"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }

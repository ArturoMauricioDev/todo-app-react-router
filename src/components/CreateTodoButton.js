import React from 'react'

function CreateTodoButton({ openModal, setOpenModal }) {
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

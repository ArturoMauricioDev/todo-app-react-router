import React from 'react'
import { FaCheck } from "react-icons/fa"
import { ImCross } from "react-icons/im"

function TodoItem(props) {
    return (
        <li className="todo-item">
            <span className ={`icon icon-check ${props.completed && 'icon-check--active'}`}> <FaCheck /></span>
            <p className={`${props.completed && 'todo-item-p-completed'}`}>{props.text} </p>
            <span className="icon icon-delete">  <ImCross /> </span>
        </li >
    )
}

export { TodoItem }

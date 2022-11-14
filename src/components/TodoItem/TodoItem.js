import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p className={`${props.completed && "todo-item-p-completed"}`}>
        {props.text}
      </p>
      <span className="icon icon-edit" onClick={props.onEdit}>
        <AiFillEdit />
      </span>
      <span className="icon icon-delete" onClick={props.onDelete}>
        <ImCross />
      </span>
    </li>
  );
}

export { TodoItem };

import React, { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input className="todo-search" placeholder="Search..." type="text" value={searchValue} onChange={onSearchValueChange} />
    )
}

export { TodoSearch }

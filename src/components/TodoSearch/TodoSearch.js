import React from "react"


function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input className="todo-search" placeholder="Search..." type="text" value={searchValue} onChange={onSearchValueChange} />
    )
}

export { TodoSearch }

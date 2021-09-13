

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return [
        <input className="todo-search" placeholder="Search..." type="text" value={searchValue} onChange={onSearchValueChange} />,
        <p>{searchValue} </p>
    ]




}

export { TodoSearch }

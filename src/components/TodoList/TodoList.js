import React from 'react'

function TodoList(props) {
    const renderFunc =  props.children || props.render;
    return (
        <section className="todo-list">
            {!props.totalTodos && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.filteredText.length) && props.onEmptySearchResults(props.searchValue) }
            {props.filteredText.map(renderFunc)}
        </section>
    )
}

export { TodoList }

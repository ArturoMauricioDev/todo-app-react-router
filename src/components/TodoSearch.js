import React from 'react'

function TodoSearch({ id, placeholder, type }) {
    return (
        <label htmlFor={id}>
            <input id={id} placeholder={placeholder} type={type} />
        </label>
    )
}

export { TodoSearch }

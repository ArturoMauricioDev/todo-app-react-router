import { useState, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";



function useTodos() {

    const [todos, saveTodos, setSincronizedItem] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const filteredText = useMemo(() =>
        todos.filter((todo) => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }), [todos, searchValue]
    )



    const toggleTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        }
        );
        saveTodos(newTodos);
    }

    const states={
        totalTodos,
        completedTodos,
        searchValue,
        filteredText,
        openModal,
    }
    const stateUpdaters={
        setSearchValue,
        toggleTodo,
        deleteTodo,
        setOpenModal,
        addTodo,
        setSincronizedItem
    }

    return {states, stateUpdaters}
}

export { useTodos }
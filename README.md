# Todo App in React

Es un proyecto que tiene como objetivo aplicar teoría de componentes utilizando `Atomic Design` bajo el **principio de responsabilidad única**. Para los estilos se utilizó el preprocesador de CSS `SASS`. Se creó la aplicación con `Create React App`, se utilizó conceptos de estados de componentes y el ciclo de vida de los mismos, además de varios `hooks`. La aplicación también utiliza persistencia de datos en el `Local Storage`.

## Tabla de Contenidos

- [Demo](#demo)
- [Construcción del proyecto](#construcción-del-proyecto)
  - [Composición de componentes](#composición-de-componentes)
  - [Preprocesador SASS](#preprocesador-sass)
  - [Manipulando el DOM con JavaScript](#manipulando-el-dom-con-javascript)
- [Licencia](#licencia)
- [Bonus](#bonus)
- [Autor](#autor)

## Demo

El proyecto esta disponible en:

- [App.](https://arturomauriciodev.github.io/todo-app-react-render/)
- [GitHub Repo.](https://github.com/ArturoMauricioDev/todo-app-react-render)

En la imagen se puede observar la pantalla de inicio, donde se pueden agregar las tareas a realizar.

![Inicio de la aplicacion, agregue una tarea a realizar](https://i66.servimg.com/u/f66/20/43/92/62/localh18.png)

Se despliega un modal, en el cual se escribe la tarea a realizar y se le da en añadir.

![Escibe un nuevo TODO y has clic en añadir](https://i66.servimg.com/u/f66/20/43/92/62/localh19.png)

Las tareas se agregan cronológicamente, también se puede indicar que ya fueron completadas mostrando el total de ellas en la parte superior. Del mismo modo se las pueden eliminar para que desaparezcan de la lista. Asimismo, es bueno mencionar que todos los datos son guardados en el local storage de tal modo que si cerramos el navegador los datos persisten para la próxima vez que se abra el navegador e ingrese a la aplicación.

![Has completado 2 tareas de 4](https://i66.servimg.com/u/f66/20/43/92/62/localh20.png)

Se pueden ingresar caracteres y/o palabras para filtrar las tareas a mostrar en la lista.

![Ingreso la i en el cuadro de búsqueda de tareas](https://i66.servimg.com/u/f66/20/43/92/62/localh21.png)

Por ejemplo, si ingreso "im" se desplegaría en la lista de tareas "Implementar estados a mis componentes".

![Se ingresa im en el cuadro de búsqueda dando un resultado](https://i66.servimg.com/u/f66/20/43/92/62/localh22.png)

En caso de no encontrar coincidencias, se despliega un mensaje de "No hay resultados para:" el criterio de su búsqueda.

![Se ingresa reac en el cuadro de búsqueda dando ningun reslutado](https://i66.servimg.com/u/f66/20/43/92/62/localh17.png)

## Construcción del proyecto

Se construyó utilizando la metodología `mobile first` para dispositivos de 375px. Asimismo, para los estilos se hace el uso de la metodología `BEM` en el preprocesador `SASS`. También se utiliza `React` para crear componentes utilizando `Atomic Design` y aprovechar los estados de los componentes junto a sus hooks.

A continuación se mostrará algunos detalles y buenas prácticas:

### Composición de componentes

_Componentes de la aplicación_

```
<TodoHeader>
    <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
</TodoHeader>

<TodoList
    filteredText={filteredText}
    totalTodos={totalTodos}
    searchValue={searchValue}
    onEmptyTodos={() => <EmptyTodos />}
    onEmptySearchResults={(searchText) => (
        <p className="empty-todos">No hay resultados para: {searchText}</p>
    )}
    render={(todo) => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => toggleTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
    )}
>
</TodoList>

{openModal && (
    <Modal>
        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
    </Modal>
)}
<CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />

<ChangeAlertWithStorageListener sincronize={setSincronizedItem} />
```

### Preprocesador SASS

_Importación de estilos por componente_

```
//index.scss

@import "./components/styles/globales.scss";
@import "./components/styles/TodoCounter";
@import "./components/styles/CreateTodoButton";
@import "./components/styles/TodoList";
@import "./components/styles/TodoSearch";
@import "./components/styles/TodoItem.scss";
@import "./components/styles/Modal";
@import "./components/styles/TodoForm";
@import "./components/styles/ChangeAlert";
@import "./components/styles/EmptyTodos";

body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: $bg-color;
  font-family: $Fuente1;
}

#root {
  margin: 0 24px;
  min-height: 100vh;
}
```

_Uso de variables_

```
$Fuente1: 'Nunito', sans-serif;
$color-primario: #29A19C;
$color-primario-disabled:#29a19c75;
$color-secundario: #F9F9F9;
$color-secundario-tranparenci:#f9f9f9ad;
$color-variante:rgba(249, 249, 249, 0.2);
$bg-color: #222831;
$bg-component:#2C3440;
```

_Anidamiento en los estilos_

```
.ChangeAlert-bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1e1e1f50;
    z-index: 2;
    & .alert-container{
        height: 100%;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & p{
            width: 100%;
            height: 56px;
            margin: 0;
            background: #f75858;
            color: $color-secundario;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            cursor: pointer;
        }
        & button{
            width: 100%;
            height: 48px;
            margin: 0;
            background: $color-secundario;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            color: $bg-component;
            font-family: $Fuente1;
            font-size: 16px;
            font-weight: 700;
            border: 1px solid transparent;
            transition: border 0.15;
            &:hover{
                border: $color-secundario-tranparenci;
            }
        }
    }
}
```

### Manejo del estado

_Custom hook_

```
//useTodos.js

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
```

_Persistencia de datos en el local storage utilizando useEffect y useReducer_

```
//useLocalStorage.js

import { useEffect, useReducer } from "react"

function useLocalStorage(itemName, initialValue) {

    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
    const {
        sincronizedItem,
        item
    } = state

    //Action Creators
    const onSuccess = (parsedItem) => dispatch({
        type: actionTypes.success,
        payload: parsedItem
    })
    const onSave = (newItem) => dispatch({
        type: actionTypes.save,
        payload: newItem
    })
    const onSincronize = ()=> dispatch({
        type: actionTypes.sincronize
    })

    useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem)
    }, [sincronizedItem])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        onSave(newItem)
    }

    const sincronizeItem = () => {
        onSincronize()
    }

    return [
        item,
        saveItem,
        sincronizeItem
    ]
}

const initialState = ({ initialValue }) => ({
    sincronizedItem: true,
    item: initialValue
})

const actionTypes = {
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'
}

const reducerObject = (state, payload) => ({
    [actionTypes.success]: {
        ...state,
        sincronizedItem: true,
        item: payload
    },
    [actionTypes.save]: {
        ...state,
        item: payload
    },
    [actionTypes.sincronize]: {
        ...state,
        sincronizedItem: false,
    }
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage };
```

_Optimizando las búsquedas con useMemo_

```
const filteredText = useMemo(() =>
        todos.filter((todo) => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }), [todos, searchValue]
    )
```

## Licencia

> Este proyecto esta bajo la licencia de MIT.

## Autor

Made with 💜 by [ArturoMauricioDev](https://arturomauricio.bio.link/)

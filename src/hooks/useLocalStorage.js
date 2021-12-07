import { useEffect, useReducer } from "react"

function useLocalStorage(itemName, initialValue) {

    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

    const {
        sincronizedItem,
        item
    } = state


    // const [sincronizedItem, setSincronizedItem] = useState(true)
    // const [item, setItem] = useState(initialValue)

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
        // setItem(newItem)
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
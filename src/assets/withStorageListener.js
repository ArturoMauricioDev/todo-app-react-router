import React, { useState, useEffect } from 'react'

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false);

        useEffect(() => {
            const onChange = (change) => {
                if (change.key === 'TODOS_V1') {
                    console.log('Hubo cambios en TODO_V1')
                    setStorageChange(true)
                }
            }
            window.addEventListener('storage', onChange)
            return () => {
                window.removeEventListener('storage', onChange)
            }
        }, [])

        const toggleShow = () => {
            setStorageChange(false)
            props.sincronize(false)
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />)
    }
}
export { withStorageListener }

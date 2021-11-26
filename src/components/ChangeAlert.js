import React from 'react'
import { withStorageListener } from '../assets/withStorageListener'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="alert-container">
                    <p>Hubo cambios en la lista</p>
                    <button onClick={() => toggleShow(false)}>
                        Actualizar
                    </button>

                </div>

            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }

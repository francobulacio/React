import React from 'react'
import { useState } from 'react'

const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false)

    const manejadorMsj = () => {
        setMensaje (!mensaje)
    }


  return (
    <div>
        <br />
        <button onClick={ manejadorMsj}> {mensaje ? "Ocultar" : "Mostrar"} </button>
        <br />
        {mensaje && <p> "aguante use state"</p> }
    </div>
  )
}

export default Mensaje
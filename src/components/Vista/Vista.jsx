import React from 'react'
import './Vista.css'
import { useState } from 'react'

const Vista = () => {
    const [modoOscuro, setmodoOscuro] = useState(false)

    const cambiarModo =() =>{
        setmodoOscuro(!modoOscuro)
    }

    const estilo = modoOscuro? "oscuro" : "claro"
  return (
    <div className= {estilo}>
        <button onClick={cambiarModo}> {modoOscuro? "claro" : "oscuro"} </button>
        <h2>Componente vista</h2>
        <p>bla bla bla</p>
    </div>
  )
}

export default Vista
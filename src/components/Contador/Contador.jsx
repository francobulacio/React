import React from 'react'
import { useState, useEffect } from 'react'

const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    

    const incrementar = () => {
        if (contador < stock) {
            setContador (contador + 1)
        }
    }

    //falta agregar
    //useEffect (() =>{
      //document.title = 'contador: ${contador}' 
    //}, [contador]);

    const decrementar = () => {
        if (contador > inicial){
        setContador (contador - 1)
        }
    }

  return (
    <>
    <button onClick={incrementar}>+</button>
    <p> {contador} </p>
    <button onClick={decrementar}>-</button>
    <br />
    <br />
    <button>Agregar al carrito</button>
    </>
  )
}

export default Contador
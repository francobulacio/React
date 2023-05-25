import React from 'react'
import { useState, useEffect } from 'react'
import { useCart } from '../../Context/CartContextProvider';

const Contador = ({stock, inicial, producto}) => {
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
    const {handleBuyProduct} = useCart()
  return (

    <>
    <button onClick={incrementar}>+</button>
    <p> {contador} </p>
    <button onClick={decrementar}>-</button>
    <br />
    <br />
    <button onClick={() => handleBuyProduct(producto, contador)}>Agregar al carrito</button>
    </>
  )
}

export default Contador


import React from 'react'
import { useCart } from '../../Context/CartContextProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, vaciarCarrito } = useCart()
    console.log(cart)
  return (
    <div>
      
    {cart.length>0? (
      <div>
        <h1>Carrito de compras</h1>
        {cart.map(product =>(
            <div key={product.id}>
                <h2>{product.nombre}</h2>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <hr />
            </div>
        ))}

        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <Link to={"/checkout"}>Ir a checkout</Link>
    </div>):
    (<h1>Aún no has comprado nada</h1>)
    }

    </div>
  )
}

export default Cart
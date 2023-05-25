import React from 'react'
import { useCart } from '../../Context/CartContextProvider'

const Cart = () => {
    const {cart } = useCart()
    console.log(cart)
  return (
    <div >
        {cart.map(product =>(
            <div key={product.id}>
                <h2>{product.nombre}</h2>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Cart
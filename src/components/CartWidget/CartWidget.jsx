import React from 'react'
import Cart from './Assest/Cart.svg'

const CartWidget = () => {
  return (
    <div>
        <img src={Cart} alt="carrito de compras" />
        0
    </div>
  )
}

export default CartWidget
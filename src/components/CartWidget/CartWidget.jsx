import React from 'react'
import favicon2 from './Assest/favicon2.png'
import { useCart } from '../../Context/CartContextProvider'

const CartWidget = () => {
  const {cart } = useCart()
  return (
    <div>
        <img src={favicon2} alt="carrito de compras" />
        <strong>{cart.length}</strong>
    </div>
  )
}

export default CartWidget
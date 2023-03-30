import React from 'react'
import favicon2 from './Assest/favicon2.png'

const CartWidget = () => {
  return (
    <div>
        <img src={favicon2} alt="carrito de compras" />
        <strong>0</strong>
    </div>
  )
}

export default CartWidget
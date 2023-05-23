import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} className='imgProducto' />
        <h6>nombre: {nombre} </h6>
        <p>Precio: {precio}</p>
        <Link to= {`/item/${id}`}>Ver Detalles</Link>



    </div>
  )
}

export default Item

//<button className='btnProducto'>Ver Detalles</button>
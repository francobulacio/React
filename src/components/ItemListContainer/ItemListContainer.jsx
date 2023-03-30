import React from 'react'
import './itemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h5 className='subtitulo'> {props.greeting} </h5>
  )
}

export default ItemListContainer
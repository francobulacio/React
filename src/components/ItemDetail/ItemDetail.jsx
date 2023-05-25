import Contador from '../Contador/Contador'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {

  console.log(producto)

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {producto.nombre}</h2>
        <h3>Precio: {producto.precio}</h3>
        <img className='imgDetail' src={producto.img} alt={producto.nombre} />

        <Contador producto={producto} inicial={1} stock={10}/>

    </div>
  )
}

export default ItemDetail
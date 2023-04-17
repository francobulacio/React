import {useState, useEffect} from 'react'
import { getProducts, getProductosPorCategoria } from '../prueba'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer2 = () => {
    const[products, SetProducts] = useState([])

    const {idcat } = useParams();

    useEffect (() => {
        const funcionProductos = idcat? getProductosPorCategoria : getProducts

        funcionProductos(idcat)
        .then(response => SetProducts(response))
        .catch(error => console.error(error))
    }, [idcat])

    return (
        <div>
            <h6>Productos</h6>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer2
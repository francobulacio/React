import {useState, useEffect} from 'react'
import { getProducts, getProductosPorCategoria } from '../prueba'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemListContainer2 = () => {
    const {idcat } = useParams();
    const[products, SetProducts] = useState([])
    useEffect (() => {
        const call = idcat? query(collection(db,"products"),where("idcat", "==", idcat)) : collection (db, "products")
        getDocs (call)
            .then ((res) => { 
                const currentProducts = res.docs.map((doc) => {
                const data = doc.data()
                return {id: doc.id, ...data} })
                SetProducts(currentProducts)
            })   
    }, [idcat])



    

    /* useEffect (() => {
        const funcionProductos = idcat? getProductosPorCategoria : getProducts

        funcionProductos(idcat)
        .then(response => SetProducts(response))
        .catch(error => console.error(error))
    }, [idcat]) */

    return (
        <div>
            <h6>Productos</h6>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer2
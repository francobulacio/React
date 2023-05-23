import { getUnProducto } from "../prueba"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemDetailContainer = () => {
    const [ producto, setProducto] = useState (null)

    const {idItem} = useParams()
    useEffect(() => {
      const nuevoDocumento = doc(db,"products", idItem)
        getDoc(nuevoDocumento)
          .then((res) => {
            const data = res.data()
            const nuevoProducto = {id: data.id,...data}
            setProducto(nuevoProducto)
          })
    }, [idItem])
  
/*     useEffect (() => {
      getUnProducto(idItem)
        .then(res => setProducto(res))
    }, [idItem]) */

  return (
    <div>
        <ItemDetail {...producto}/>

    </div>
  )
}

export default ItemDetailContainer
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { useCart } from '../../Context/CartContextProvider'
import { db } from '../../firebaseConfig'
import { Link } from 'react-router-dom'



const Checkout = () => {
    const {cart, vaciarCarrito } = useCart()
    const [buyer, setBuyer] = useState({
        nombre: "",
        apellido: "",
        telefono:"",
    }) 

    const [ordenId, setOrdenId] = useState(null)

    const [load, setLoad] = useState(false)

console.log(buyer)
    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generarOrder = async (data) => {
        try{
            const section = collection(db,"ordenes")
            const orden = await addDoc(section, data)
            setOrdenId(orden.id)
            vaciarCarrito()
        }
        catch(error){}
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault ()
        const day = new Date()
        const data = {
            day, buyer, cart
        }
        generarOrder(data)
        setLoad(true)
    }

    return (
    <div>
        {!load? (
            <div>
            <h1>Ingresa tus datos aquí</h1>
            <form action="">
                <label htmlFor=""> Nombre y apellido</label>
                <input type="text" placeholder='Franco Bulacio' name='nombre' onChange={handleInputChange} />
                <label htmlFor=""  >Ingresa tu email</label>
                <input type="text" placeholder='example@gmail.com' name='apellido' onChange={handleInputChange} />
                <label htmlFor="">N° de telefono</label> 
                <input type="text" placeholder='11-6584-7892' name='telefono' onChange={handleInputChange} />
                <input type="submit" value="Enviar" onClick={handleSubmit}/>
            </form>
        </div>)
        : 
        (
            <div>
                <h1>Compra finalizada con éxito</h1>
                <div>
                    <h2>ID de la compra: {ordenId}</h2>
                    <h3>nombre de la orden: {buyer.nombre}</h3>
                    <Link to={"/"}> Volver a la tienda </Link>
                </div>
            </div>
        )}
    </div>
    )
}

export default Checkout
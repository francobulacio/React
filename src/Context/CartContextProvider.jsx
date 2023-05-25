import React, { useContext, createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) =>{
   
    const [cart, setCart ] = useState([])

    const handleBuyProduct = (productToBuy, quantity) =>{
        if(cart.some(product => product.id == productToBuy.id)){
            setCart(cart.map(product => {
                if(product.id == productToBuy.id){
                    product.quantity += quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...productToBuy, quantity}])
        }
    }
    
    return (
        <CartContext.Provider value={{cart, handleBuyProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider


export const useCart = () => {
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within a CartProvider');
    }
    return context
}
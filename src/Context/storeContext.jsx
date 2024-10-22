import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [CartItem ,setCartItem] = useState({}) 

    const addTocart = (itemId) => {
        if (!CartItem[itemId]){
            setCartItem((prev)=> ({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev) => ({...prev, [itemId] : prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem ((prev) => ({...prev ,[itemId] : prev[itemId]-1 }))
    }

    const contextvalue = { 
        food_list,
        CartItem,
        setCartItem,
        addTocart,
        removeFromCart
    }
    useEffect(()=> {
        console.log(CartItem)
    },[CartItem])
    return (
        <StoreContext.Provider value = {contextvalue}>
           {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider

import React, { createContext, useState } from 'react'
import { Cart } from './components/Cart';
export const cartItems = createContext();


export const Context = ({children}) => {
    const [cart,setCart] = useState([]);
  return (
    <cartItems.Provider value={{cart,setCart}}>
        {children}

    </cartItems.Provider>
  )
}

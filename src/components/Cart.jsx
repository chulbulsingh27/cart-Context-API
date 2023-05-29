import React, { useContext, useEffect, useState } from 'react'
import { cartItems } from '../Context';
import { SingleProduct } from './SingleProduct'
export const Cart = () => {
  const [total,setTotal] = useState();
  const {cart} = useContext(cartItems);
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0))
  }, [cart]) 
  return (
    <div>
        <span style={{fontSize:30 }}>My Cart</span>
        <br />
        <span style={{fontSize:30}}>Total : {total}</span>
        <div className="productContainer">
            {
              cart.map((prod)=> (
                <SingleProduct prod = {prod} key={prod.id} />

              ))
            }
        </div>
    </div>
  )
}

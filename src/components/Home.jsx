import React, { useContext, useState } from 'react';
import faker  from "faker";
import { SingleProduct } from './SingleProduct';
import './styles.css';
import { cartItems } from '../Context';
faker.seed(200);


export const Home = () => {
  const {cart,setCart} = useContext(cartItems);
  console.log(useContext(cartItems));
    const productArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name : faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))
    const [products] = useState(productArray);
    //console.log(cart)
  return (
    <div className='productContainer'>
        {products.map(( prod => (
            <SingleProduct prod = {prod} key={prod.id}/>
        )))}
    </div>
  )
}

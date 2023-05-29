import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartItems } from '../Context'
import './styles.css'


export const Header = () => {
  const {cart} = useContext(cartItems);
  return (
    <div>
        <span className='header'>React context api tutorial </span>
        <ul className='nav'>
            <li >
                <Link to='/'>Home Page</Link>
            </li>
            <li >
                <Link to='/cart'>Cart Page ({cart.length})</Link>
            </li>
        </ul>
    </div>
  )
}

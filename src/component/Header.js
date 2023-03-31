import React from 'react'
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
export  function Header() {
  const {cartList} = useCart()
  return (
    <section>
      
      
<ul className="nav">
  
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to ="/Cart">Cart</NavLink>

  </li> 
  <li> {cartList.length} </li>
</ul>
    </section>
  )
}

import React from 'react';
import {useCart} from './Cartprovider';

const Cart=()=>{
  const asses= useCart();
  const total = asses.item.reduce((a,b)=> a + Number(b.price),0);
  return(
    <div>
      <h1>Cart</h1>
{asses.item.map((item)=>(
  <li>{item.name}-${item.price}</li>
))
}

      <h5>total price :${total}</h5>
      
    </div>
    );
}

export default Cart;
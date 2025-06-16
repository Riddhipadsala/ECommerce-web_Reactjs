import React from 'react';
import {useCart} from './Cartprovider';
import {Cartcontext} from './Cartprovider';

const Item=(props)=>{
  const asses= useCart();
  return(
    <>
      <h4>{props.name}</h4>
      <p>Price : $ {props.price}</p>
      <button onClick={()=> asses.setitem([])}>Add To Cart</button>
    </>
    );
}

export default Item;
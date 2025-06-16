import React from 'react';
import {useSelector} from 'react-redux';
const Head=()=>{
  const data=useSelector(state=> state)
  const total= data.cart.reduce((a,b)=> a+b.price ,0);
  return(
    <div className="container">cart: {data.cart.length} Price : {total}</div>
    );
}

export default Head;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import {useNavigate} from 'react-router-dom';
//import {subhandleAddToCart} from '../Page/Subpage';

export const fetchdata=async()=>{
    const data=await fetch("/Data.json")
    return await data.json();
    
  }

const Box=(props)=>{
  
  const navigation=useNavigate();
  
  
  return(
    <>
      
      <img src={props.img} class="bdhaimg" onClick={()=> {navigation(`/card/${props.id}`)}}></img>
      
    </>
    );
}

export default Box;
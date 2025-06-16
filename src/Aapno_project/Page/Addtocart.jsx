import React,{useEffect,useState} from 'react';
import { useFirebase } from '../Context/Fcontext';
import './Carddetail.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  './Addtocart.css'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const give = useFirebase();
  const navigate = useNavigate();
  const [total,settotal]=useState(0);

  useEffect(()=>{
  settotal(give.item.reduce((a,b)=> a+Number(b.price.replace('$','')),0));
  },[give.item])
  
const back=()=>{
  navigate(-1);
}

const clear=()=>{
  give.setitem([]);
}

const remove=(indexno)=>{
give.setitem(give.item.filter((e)=> e.index!=indexno));

}



  return (
    <>
 
<div class="containerdiv">
  {
  give.item.map((e)=>
  <div class="subcon">
<img src={e.img} class="pic"></img>
    <span class="name">{e.name}</span>
    <span>{e.price}</span>

    <Button style={{backgroundColor:"white",color:"black"}}
    onClick={()=> remove(e.index)}> Remove</Button>
  </div>
  )}
  <div class="last">
    <div class="total">Total Price : ${total}</div>
   <Button style={{backgroundColor:"white",color:"black",margin:"5%"}} onClick={back} >Continue Shopping</Button>
  <Button style={{backgroundColor:"white",color:"black"}} onClick={clear}>Remove All</Button>
  </div>
</div>


 

    </>
  );
};

export default Add;
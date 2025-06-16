import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Subpage from './Subpage';

export const datafet=async(e)=>{
  const data=await fetch("/menu.json")
   return await data.json();
   
}



const Carddetails=(props)=>{
  const [data, setdata]=useState([]);
  const [filt,setfilt]=useState([]);
    const param= useParams();
  
    useEffect(()=>{
  datafet().then((e)=>setdata(e.menu))
},[])

useEffect(()=>{
const fildata=data.filter((e)=>
e.menuid===param.cardid)

setfilt(fildata);
},[data])

if(filt.length==0) return <p>stock is not available</p>

  return(
    <> 
    
    <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"50px"}}>
{
  filt.map((e,index)=>(
    <Subpage id={`${e.name}-${index}`} key={e.menuid} name={e.name} img={e.img} price={e.price} quantity={e.quantity}/>
 ))
}
      </div>
    </>
    );
}

export default Carddetails;
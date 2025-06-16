import React,{useState,useEffect} from 'react';
import {getpost,name} from './Api';
import Propss from './Props'
import Props2 from './Props2'

const Api2=()=>{
  const [val,setval]=useState(null)
  const [nval,nsetval]=useState(null)
 
  
  useEffect(()=>{
    getpost().then((posts)=> setval(posts))
  },[]);
  
  useEffect(()=>{
    name().then((user)=> nsetval(user))
  },[]);
  
  return(
    <>
<div>
     {val ? val.map((e)=>{
     <>
     <Props2 />
     <Propss title={e.title} body={e.body} />
     </>}) :<p>no data fetch</p>
          
       
     }

       
     
    </div>
    </>
    );
}

export default Api2;

//api2 ne app.jsx ma render krvana
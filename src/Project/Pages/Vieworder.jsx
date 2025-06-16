import React,{useState,useEffect} from 'react';
import {useFirebase} from '../Context/Firebasecontext';
import Bookcard from '../Pages/Card';

const Vieworder=()=>{
  const asses=useFirebase();
  const [book,setbook]=useState([]);
  
  useEffect((e)=>{
    asses.seeord().then((e)=>{
      setbook(e);
    })
  },[])
  
  return(
    <>
      <div>    
  {
    book.map((e)=>(
       <Bookcard {...e.data()} 
       id={e.id}/>))
  }</div>
    </>
    );
}

export default Vieworder;
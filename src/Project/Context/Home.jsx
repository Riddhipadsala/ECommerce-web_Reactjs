import React,{useState,useEffect} from 'react';
import {useFirebase} from './Firebasecontext';
import Bookcard from '../Pages/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
  const firebase=useFirebase();
  const [book,setbook]=useState([]);
  
useEffect(()=>{
  firebase.getdata().then((e)=> setbook(e.docs)
  )
},[])

return(
  <>
     <CardGroup>
  {
    book.map((e)=>(
       <Bookcard {...e.data()} 
       id={e.id}/>))
  }</CardGroup>
 </>
  ); 
  
}

// link ne lagtu jova mate timing che 37:47 something

export default Home;
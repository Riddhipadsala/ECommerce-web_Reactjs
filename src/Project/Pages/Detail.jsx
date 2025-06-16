import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFirebase} from '../Context/Firebasecontext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Detailpage=()=>{
  const param= useParams();
  const asses = useFirebase();
  const [data,setdata]=useState(null);
  const [qty,setqty]=useState("1");
  
  useEffect(()=>{
    asses.getbookbyid(param.bookid).then((e)=> setdata(e.data()))
  },[param.bookid])
  
  if(!data){
    return <p>Loading...</p>
  }
  
  const orderaapo=()=>{
    asses.order(param.bookid,qty)
  }
  
    return(
      <>
      <div className="container m-5">
    <h1>{data.name}</h1>
    <h3>Details</h3>
    <p>Price : {data.price}</p>
    <p>IsbnNo : {data.isbnno}</p>
     <h3>Owner Detail</h3>
     <p>EmailId : {data.userEmail}</p>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Qty:</Form.Label>
        <Form.Control onChange={e=> setqty(e.target.value)} type="number" placeholder="enter QTY" />
      </Form.Group>
      <Button onClick={(e)=>{
        orderaapo();
      }} variant="success">Buy now</Button>
     </div>
     
   
     </>
    );
}

export default Detailpage;
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../Context/Firebasecontext';


const Listing=()=>{
  const assec=useFirebase();
  const [name,setname]=useState("");
  const [isbnno,setisbnno]=useState("");
 const [price,setprice]=useState("");
 const [coverpic,setcoverpic]=useState("");
 
 const handler=(e)=>{
   e.preventDefault();
   assec.store(name,isbnno,price,coverpic)
   assec.store(name,isbnno,price,coverpic)
 }
 
  return (
    <>
    <div className="container mt-5">
    <Form onSubmit={handler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={e=> setname(e.target.value)}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Isbn number</Form.Label>
        <Form.Control onChange={e=> setisbnno(e.target.value)} type="text" placeholder="Enter Isbn number" />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
         <Form.Control onChange={e=> setprice(e.target.value)} type="text" placeholder="Enter Price" />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cover pic</Form.Label>  
        <Form.Control onChange={e=> setcoverpic(e.target.value)} type="file" placeholder="Isbn number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Create
      </Button>
    </Form >
    
    </div>
   

 </>
 );
}

export default Listing;
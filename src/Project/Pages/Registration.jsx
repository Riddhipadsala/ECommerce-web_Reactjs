import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../Context/Firebasecontext';


function Registration() {
  
const assec = useFirebase();
const [email,setemail]=useState('')
const [pass,setpass]=useState('');
const navigate=useNavigate();
 useEffect(()=>{
   if(assec.isloggin)
   {
     navigate("/");
   }
 },[assec])
 
  const handle = async (e) => {
  e.preventDefault();
  
    await assec.signup(email, pass);
    alert("User created successfully");
  
};
  return (
    <div className="container mt-5">
    <Form onSubmit={handle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=> setemail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e=> setpass(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        create Account
      </Button>
    </Form >
    </div>
  );
}

export default Registration;
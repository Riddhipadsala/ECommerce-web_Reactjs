import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import {useFirebase} from '../Context/Fcontext';

const Signup=()=>{
  const [email,setemail]=useState();
  const [pass,setpass]= useState();
  const give=useFirebase();
  const navigation=useNavigate();
  
  useEffect((e)=>{
    if(give.islogin){
      navigation("/Home");
    }
  },[give.islogin]);
  
  const handler=async(e)=>{
   e.preventDefault();
   try{
     
   await give.signup(email,pass);
     alert('SIGN UP SUCCESSFULLY');
     
   }catch(err){
     alert(err.message);
   }
   
  }
  

  return (
    <>
    <div className="container mt-5">
    
    <Form onSubmit= {handler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button class="btn btn-outline-primary btn-lg" style={{margin:"10px"}} variant="primary" type="submit" >
        Sign Up
      </button>
    </Form >

    </div>
   

 </>
 );
}

export default Signup;
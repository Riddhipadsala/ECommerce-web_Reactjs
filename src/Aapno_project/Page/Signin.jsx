import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import Form from 'react-bootstrap/Form';

import {useFirebase} from '../Context/Fcontext';

const Login=()=>{
  const give=useFirebase();
  const [email,setemail]=useState('')
const [pass,setpass]=useState('');
 
 
 
  const handler=async(e)=>{
    e.preventDefault();
    try{
    await  give.signin(email,pass);
    alert('USER ACCOUTN CREATED');
    }catch(e){
      alert(e)
    }
    
  }
  

  return (
    <>
    <div className="container mt-5">
    
    <Form onSubmit={(e)=>{handler(e)}}>
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
        Sign In
      </button>
      <h1>OR</h1>
            <button class="btn btn-outline-success btn-lg" style={{margin:"10px"}}  type="submit" onClick={
              (e)=>{ e.preventDefault();
                give.signwithgoogle();
              }
            }>
       <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />  Sign In With Google
      </button>
    </Form >

    </div>
   

 </>
 );
}

export default Login;
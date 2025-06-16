import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../Context/Firebasecontext';
import {FirebaseProvider} from '../Context/Firebasecontext';

function Login() {
  
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
  try {
    await assec.signin(email, pass);
    alert("Signin successfully");
  } catch (err) {
    console.error(err);
    alert("Error: " + err.message);
  }
};
  return (
    <>
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
        Login
      </Button>
    </Form >
     <h1 className="mt-5 mb-5">OR</h1>
   <Button variant="danger" type="button" onClick={e => {
  e.preventDefault();
  assec.googlesignin();
}}>
  SignIn with Google
</Button>
    </div>
   

 </>
 );
}

export default Login;
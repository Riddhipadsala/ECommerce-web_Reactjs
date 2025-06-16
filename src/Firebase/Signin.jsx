import React,{useState} from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,
  GithubAuthProvider,signInWithRedirect
} from "firebase/auth";
import {app} from './Firebasecon';

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();


function Signin(){
  
  
  
  const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
  
  const signin = () => {
  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Login successful");
    })
    .catch((e) => {
      alert("Error: " + e.message);
    });
};

const signinwithgoogle=()=>{
  signInWithPopup(auth,googleprovider)
}

const signinwithgithub=()=>{
  signInWithRedirect(auth,githubprovider)
}

  return(
    <>
      <div>
         <h1>SignIn page</h1>
    <label>email</label>
    <input onChange={(e)=> setemail(e.target.value)} type="email" placeholder="enter email here"></input>
        <label>password</label>
    <input onChange={(e)=> setpass(e.target.value)} type="password" placeholder="enter password here"></input>
      
        <button onClick={ signin }>signIn</button>
      <br></br>  
    <h1>SignIn with google</h1>
         <button onClick={ signinwithgoogle }>signin with google</button>
        
   <button onClick={ signinwithgithub }>signin with Github</button>
      </div>
    </>
    );
}

export default Signin;
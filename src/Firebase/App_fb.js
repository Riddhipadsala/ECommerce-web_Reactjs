import React,{useState} from 'react';
import {getDatabase,ref,set} from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

import Signin from './Signin';
import {app} from './Firebasecon';

//database ma data add krva mate 

  const db= getDatabase(app);
  
//database ma emailid with password add krva mate 
 const auth = getAuth(app);

  
function App_fb(){
  
  const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
  const [inemail,insetemail]=useState("");
    const [inpass,insetpass]=useState("");
  
  const signUp=()=>{
    createUserWithEmailAndPassword(auth,email,pass).then(alert("success"))
  }
  


const signin = () => {
  signInWithEmailAndPassword(auth, inemail, inpass)
    .then(() => {
      alert("Login successful");
    })
    .catch((e) => {
      alert("Error: " + e.message);
    });
};

  return(
    <>
    <div>firebase</div>
<br></br>
    <h1>SignUp page</h1>
    <label>email</label>
    <input onChange={(e)=> setemail(e.target.value)} type="email" placeholder="enter email here"></input>
        <label>email</label>
    <input onChange={(e)=> setpass(e.target.value)} type="password" placeholder="enter password here"></input>
      
        <button onClick={
      signUp
    }>signUp</button>
   
    <Signin />
    </>
    );
}

export default App_fb;
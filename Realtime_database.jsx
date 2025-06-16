import React,{useState} from 'react';
import {getDatabase,ref,set,get,child,onvalue} from 'firebase/database';
import {app} from './Firebasecon';

const db= getDatabase(app);

//onvalue jyare database ma change krvi tyrae automatically webpage ma pn change data thy jay

function Realtime(){
  
  const putdata=()=>{
  set(ref(db,"grandfather/father/child"),{
     name:"shema",
    age:20
  });
}

const getdata = () => {
    get(child(ref(db), "grandfather/father"))
      .then((data) => {
          alert(JSON.stringify(data.val()));
        
      })

  };


  return(
    <>
  <button onClick={ putdata } style={{margin:"10px"}}>putdata</button>
    <button onClick={ getdata } style={{margin:"10px"}}>getdata</button>
    
    </>
    );
}

export default Realtime;
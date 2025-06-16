import React,{useState,useEffect} from 'react';
import './Style.css';



const Todo=()=>{
 const [Timer,Sett]=useState(0);

useEffect(()=>{
  setInterval(()=> Sett(Timer+1),1000)
},[Timer]) 
  return( 

  <div class="com_todo">
    <p> num={Timer}</p>
 
  </div>
  );

}

export default Todo;
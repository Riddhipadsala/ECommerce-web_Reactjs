import React,{useState,useEffect} from 'react';
import './Counter.css';

const Counter:React.FC=()=>
{
  const [val,fn]=useState(0);
   
    useEffect(()=>{
    <h1>moint</h1>
  },[])
  
  const funinc=()=>{
    fn(val+1)
  }
  
  const fundec=()=>{
    if(val==0) return;
    fn(val-1)
  }
  
  
  return(
    <div className="countercont">
      <h1>{val}</h1>
      <button className="fb" onClick={funinc}>inc</button>
      <button className="sb" onClick={fundec}>dec</button>
    </div>
    )
}

export default Counter;
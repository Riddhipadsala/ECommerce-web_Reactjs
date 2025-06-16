import React,{useEffect,useState} from 'react';
import MemeCard from '../MemeCard';
import {getallmeme} from '../Datafetch';
import {subhandleAddToCart} from './Page/Addtocart';

const Home =()=>{
  const [data,setdata]=useState([]);
  useEffect(()=>{
    getallmeme().then((dataf)=> 
    setdata(dataf.data.memes) )
  },[])
  return(
    <div className="row">
      {data.map((e) =>( <MemeCard img={e.url} title={e.name}/>))}
    </div>
    );
}

export default Home;
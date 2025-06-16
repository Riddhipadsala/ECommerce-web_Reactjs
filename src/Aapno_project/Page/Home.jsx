import React, { useState, useEffect } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Box from '../Context/Card';
import Footer from '../Context/Footer';
import {fetchdata} from '../Context/Card'
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const [fun,setfun]=useState([]);
  
  useEffect(()=>{
    fetchdata().then((e)=> setfun(e.cdata));
  },[]);
  
  
  return (
    <>
      <div className="containert">
        <div className="hero">
           <div className="img">
               <p>FURNITURE FOREVER</p><br></br>
              <Button className="dark-grey-btn" onClick={()=>navigate('/Addtocart')}>
                    SEE CART
              </Button>
          </div>
        </div>
        
        
      <div class="boxes mt-3">
{
          fun.map((e,index)=>(
          <Box 
          id={index}
          img={e.img} title={e.title} price={e.price}/>))
        }
      </div>
      
      <Footer />
      </div>

    </>
  );
}

export default Home;
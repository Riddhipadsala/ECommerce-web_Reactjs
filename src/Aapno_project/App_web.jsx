import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Route,Routes} from 'react-router-dom';
//page
import Home from './Page/Home';
import Signup from './Page/Signup';
import Signin from './Page/Signin';
import Addtocart from './Page/Addtocart';
import Carddetails from './Page/Carddetails';
import Add from './Page/Addtocart';
import Riddhi from './Page/Riddhi';
//context
import Navb from './Context/Navbar'
import Footer from './Context/Footer'
const AppWeb=()=>{
  return(
    <>
    <div>
      <Navb />
    </div>
     <Routes>
    <Route path="/" element={<Signup />}></Route>   
    <Route path="/Home" element={<Home />}></Route>
   <Route path="/Home/Signin" element={<Signin />}></Route>
      <Route path="/card/:cardid" element={<Carddetails />}></Route>
      <Route path="/Addtocart" element={<Add />}></Route>
  </Routes>
  <div></div>
  </>
    );
 
}

export default AppWeb;
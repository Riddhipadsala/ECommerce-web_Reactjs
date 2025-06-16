import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';  

//Pages
import Listing from './Pages/List';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Detailpage from './Pages/Detail'; 
import Vieworder from './Pages/Vieworder'; 
//componet
import Navigation from './Context/Navbar';
import Home from './Context/Home';


function App_pro(){
  return(
    <>
      <div><Navigation /></div>

      <div>
<Routes>
    <Route path="/" element={<Home />}></Route>
  <Route path="/book/list" element={<Listing />}></Route>
    <Route path="/Login" element={<Login />}></Route>
     <Route path="/Registration" element={<Registration />}></Route>
   <Route path="/book/view/:bookid" element={<Detailpage />}></Route> 
   <Route path="/book/order" element={<Vieworder />}></Route>
   </Routes>
   </div>
    </>
    );
}

export default App_pro;
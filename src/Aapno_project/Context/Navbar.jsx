import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navb=()=>{
  return(
       <>
      <Navbar bg="white" data-bs-theme="light">
        <Container>
         
          <Navbar.Brand href="#home">           <img
              src="/Logo.png"
              alt="logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Nav className="list">

            <Nav.Link href="/Home/Signin">Login</Nav.Link>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Addtocart"><FontAwesomeIcon icon={faCartShopping} /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

export default Navb;
import React from 'react';
import './Carddetail.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../Context/Fcontext';
import { useNavigate } from 'react-router-dom';

export const subhandleAddToCart=(setitem,newItem,navigate)=>{
   setitem((prevItems) => [...prevItems, newItem]);
 navigate('/Addtocart');  
}

const Subpage = (props) => {
  const {setitem} = useFirebase();
  const navigate = useNavigate();

 const handleAddToCart = () => {
    const newItem = {
      name: props.name,
      price: props.price,
      quantity: props.quantity,
      img: props.img,
      index:props.id
    };

subhandleAddToCart(setitem,newItem,navigate);

  };

  return (
    <Card style={{ width: '18rem', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>

        <Card.Title>{props.name}</Card.Title>
        <Card.Title className="price">{props.price}</Card.Title>
        <Card.Title className="cont">{props.quantity}</Card.Title>
        <Button variant="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Subpage;
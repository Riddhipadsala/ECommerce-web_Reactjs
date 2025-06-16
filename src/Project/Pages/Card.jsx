import React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Bookcard(props){
  const navigate = useNavigate();
  
  return (
   
    <div className='m-5'>
    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has title is {props.name} and this book price is rs. {props.price} 
          
           </Card.Text>
        <Button onClick={(e)=> navigate(`/book/view/${props.id}`)} variant="primary">view</Button>
      </Card.Body>
    </Card>
</div>

);
}

export default Bookcard;
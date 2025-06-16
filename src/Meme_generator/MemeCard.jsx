import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {useNavigate} from 'react-router-dom';
const MemeCard =(props)=>{
  const navigate=useNavigate();
  return(
    <Card style={{ width: '12rem',margin: '5px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Button onClick={e=> navigate(`/edit?url=${props.img}`)} variant="primary"> Edit</Button>
      </Card.Body>
    </Card>
    );
}

export default MemeCard;
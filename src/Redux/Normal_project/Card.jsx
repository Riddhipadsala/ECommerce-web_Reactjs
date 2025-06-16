import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {additem} from './Slice';

function Procard(props) {
  const dis=useDispatch();
  return (
    <Card style={{ width: '20rem', display:'inline', }}>
<Card.Img variant="top" src={props.image || 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
              </Card.Text>
        <Button variant="primary" onClick={(e)=> dis(additem({ name: props.title, price: props.price }))}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Procard;
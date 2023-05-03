import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../Componets/ItemCounter';


const Item =({Item})=>(
    
<Card style={{ width: '18rem'}}className="float-start">
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>{Item.id}</Card.Title>
<Card.Text>{Item.Description} </Card.Text>
<Card.Text>{Item.Title}</Card.Text>
         
<Button variant="dark">Lo quiero!</Button>
<ItemCount/>
</Card.Body>
</Card>

);
export default Item;
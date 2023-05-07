import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const item = ({ item }) => {
  return (
    <Card
      style={{ width: "18rem", height: "600px" }}
      className="float-start d-flex flex-column justify-content-between"
    >
      <Card.Text>
        <b>{item.title}</b>
      </Card.Text>
      <Card.Img variant="top" src={item.pictureUrl} className="img-thumbnail" />
      <Card.Body>
        <Card.Title>{item.id}</Card.Title>
        <Card.Text>{"$" + item.price} </Card.Text>
        <Button variant="dark">
          <Link style={{"textDecoration":"none", "color":"white"}} to={`/item/${item.id}`}>ver detalles</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default item;

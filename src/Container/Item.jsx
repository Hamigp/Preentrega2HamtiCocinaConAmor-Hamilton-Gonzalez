import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <Card
        style={{ width: "18rem", height: "600px" }}
        className="float-start d-flex flex-column justify-content-between"
      >
        <Card.Img
          variant="top"
          src={item.pictureUrl}
          className="img-thumbnail"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <Card.Body>
        <Card.Text>
          <b>{item.title}</b>
        </Card.Text>
          <Card.Text>
            <strong>{"$" + item.price}</strong>
          </Card.Text>
          <Button variant="dark">
            <Link style={{ textDecoration: "none", color: "white" }} to={`/item/${item.id}`}>
              Ver detalles
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
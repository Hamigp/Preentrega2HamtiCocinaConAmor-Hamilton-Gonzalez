import React from "react";
import ItemCounter from "../components/ItemCounter";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ product, onAdd }) => {
  const { id, title, price, pictureUrl, stock, category } = product;

  return (
    <Card className="mx-auto" style={{ width: "18rem", height: "auto" }}>
      <Card.Text>
        <Card.Title>{title} </Card.Title>
      </Card.Text>
      <Card.Img
        src={pictureUrl}
        alt={title}
        className="img-thumbnail mx-auto"
      />
      <Card.Body>
        <p>ID: {id}</p>
        <p>
          <b>Precio: ${price}</b>
        </p>
        <p>Stock: {stock}</p>
        <p>Categoria: {category}</p>
        <ItemCounter onAdd={onAdd} stock={stock} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

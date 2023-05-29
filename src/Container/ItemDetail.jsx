import React, { useContext } from "react";
import ItemCounter from "../components/ItemCounter";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";


const ItemDetail = ({ product }) => {
  const { id, title, price, pictureUrl, stock, category, description } =
    product;
  const { addToCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const item = { id, title, price };
   
   addToCart(item, quantity);
  };

  return (
    <Card className="mx-auto" style={{ width: "18rem", height: "auto" }}>
      <Card.Text>
        <Card.Title>{title}</Card.Title>
      </Card.Text>
      <Card.Img
        src={pictureUrl}
        alt={title}
        className="img-thumbnail mx-auto"
      />
      <Card.Body>
        <b>Precio: ${price}</b>
        <p>Descripcion: {description}</p>
        <ItemCounter itemId={id} onAdd={handleOnAdd} stock={stock} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

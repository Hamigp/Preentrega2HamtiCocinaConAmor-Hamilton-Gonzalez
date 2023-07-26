import React, { useContext } from "react";
import ItemCounter from "../components/ItemCounter";
import Card from "react-bootstrap/Card";
import "./ItemDetail.css"; 
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
  const { id, title, price, pictureUrl, stock, description } = product;
  const { addToCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const item = { id, title, price };
    addToCart(item, quantity);
  };

  return (
    <Card className="mx-auto item-detail-card">
      <Card.Body>
        <Card.Text>
          <Card.Title>{title}</Card.Title>
          <p className="item-description">{description}</p>
        </Card.Text>
        <div className="item-image-container">
          <Card.Img src={pictureUrl} alt={title} className="item-image" />
        </div>
        <b>Precio: ${price}</b>
        <p>Stock disponible: {stock}</p>
        <ItemCounter itemId={id} onAdd={handleOnAdd} stock={stock} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCount({ stock, onAdd }) {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  const handleIncrement = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    if (counter > 0) {
      onAdd(counter);
      setIsCounting(false);
    }
  };

  if (!isCounting) {
    return (
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="dark">Seguir comprando</Button>
        </Link>{" "}
      </div>
    );
  }

  return (
    <div>
      <Button onClick={handleDecrement} variant="dark">-</Button>{" "}
      <span>
        <b>{counter}</b>
      </span>
      <Button onClick={handleIncrement} variant="dark">+</Button>{" "}
      <br />
      <br />
      <Button onClick={handleAddToCart} variant="dark" disabled={counter === 0}>
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
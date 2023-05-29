import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";



function ItemCount({ stock, onAdd }) {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  const handleIncrement = (onAdd) => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

 

  const handleRestart = () => {
    setIsCounting(true);
  };

  const { itemId } = useContext(CartContext); 
  if (!isCounting) {
    return (
      <div>
        <Button onClick={handleRestart} variant="dark">
          Volver
        </Button>{" "}
        
      </div>
    );
  }

  return (
    <div>
      <Button onClick={handleDecrement} variant="dark">
        -
      </Button>{" "}
      <span>
        <b>{counter}</b>
      </span>
      <Button onClick={handleIncrement} variant="dark">
        +
      </Button>{" "}
      <br />
      <br />
      <Button onClick={()=>onAdd(counter)}  variant="dark">
                     Agregar al Carrito
                </Button>
      
    </div>
  );
}

export default ItemCount;
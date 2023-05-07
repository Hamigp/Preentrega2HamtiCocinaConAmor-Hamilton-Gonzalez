import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ItemCount({ stock, onAdd }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    onAdd(stock - counter);
  }, [counter]);

  const handleincrement = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handledecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <Button onClick={handledecrement} variant="dark">
        -
      </Button>{" "}
      <span>
        <b>{counter}</b>
      </span>
      <Button onClick={handleincrement} variant="dark">
        +
      </Button>{" "}
    </div>
  );
}
export default ItemCount;

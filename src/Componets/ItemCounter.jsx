import { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";


const stockDisponible = 10

function ItemCount() {
const [counter, setCounter] = useState(0);

const handleincrement = () => {
   if (counter < stockDisponible) {
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
        <span>{counter}</span>
        <Button onClick={handleincrement} variant="dark">
          +
        </Button>{" "}
      </div>
    );
  }
  export default  ItemCount;
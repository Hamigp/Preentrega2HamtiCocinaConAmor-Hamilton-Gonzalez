import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CardWidget = () => {
  const { cartOrder } = useContext(CartContext);

  const totalQuantity = cartOrder.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          style={{ color: "#959697" }}
        />
        <span className="span-carrito">{totalQuantity}</span>
      </Link>
    </div>
  );
};

export default CardWidget;
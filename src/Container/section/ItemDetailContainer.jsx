import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail";
import { Container } from "react-bootstrap";
import products from "../../Data/products.json";

const ItemDetailContainer = ({ onAdd }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find(item => item.id === id);
        resolve(product);
      }, 500);
    });
    getItem.then((result) => setProduct(result));
  }, [id]);

  return (
    <Container>
      <ItemDetail product={product} onAdd={onAdd} />
    </Container>
  );
};
export default ItemDetailContainer;

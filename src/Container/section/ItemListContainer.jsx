import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ItemList from "../ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const ProductList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    ProductList.then((result) => setList(result));

    ProductList.then((result) => {
      if (id) {
        const productsFiltered = result.filter((item) => item.category === id);
        setList(productsFiltered);
      } else {
        setList(result);
      }
    });
  }, [id]);

  return (
    <Container>
      <h1>{greeting}</h1>
      <ItemList list={list} />
    </Container>
  );
};

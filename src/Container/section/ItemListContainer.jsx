import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();

    const refCollection = id
      ? query(collection(db, "items"), where("categoryId", "==", id))
      : collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) setList([]);
      else {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    });
    if (id !== undefined) {
      const q = query(collection(db, "items"), where("category", "==", id));
      getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          alert("Sin Resultados");
        }
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{greeting}</h1>
      <ItemList list={list} />
    </Container>
  );
};

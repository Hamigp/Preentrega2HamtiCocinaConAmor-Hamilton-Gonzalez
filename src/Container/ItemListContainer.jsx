import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import products from "../Data/products.json"
import { ItemList } from "./ItemList";


export const ItemListContainer = ({greeting}) => {
        const [list, setList] = useState ([])
    useEffect (()=> {
    const ProductList = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (products)
        }, 2000 );
            })
    ProductList.then (result => setList (result) )
        } , [])  ;

return ( <Container>
              <h1>{greeting}</h1>
             <ItemList list={list}/>
         </Container>
         )}
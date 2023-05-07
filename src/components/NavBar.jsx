import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import products from "../data/products.json";
import CardWidget from "./CardWidget";
import Logo from "../Assets/img/HamtiLOGO.png";
import item from "../container/Item";

const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);

  useEffect(() => {
    const ProductList = new Promise((resolve, reject) => {
      resolve(products);
    });

    ProductList.then((result) => {
      const categories = result.map((item) => item.category);
      const itemsCategories = new Set(categories);
      setItemsMenu([...itemsCategories].sort());
    });
  }, []);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="imgNavBar" src={Logo} alt="logo" />
          <Navbar.Brand href="/">Hamti cocina con amor</Navbar.Brand>
          <Nav className="me-auto">
            {itemsMenu?.map((item) => (
              <NavLink
                key={item}
                to={`/category/${item}`}
                className="mx-2 text-light"
                style={{ textDecoration: "none" }}
              >
                {item}
              </NavLink>
            ))}
          </Nav>
          <CardWidget contador={2} />
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;

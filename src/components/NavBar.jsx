import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import CardWidget from "./CardWidget";
import Logo from "../Assets/img/HamtiLOGO.png";
import { CartContext } from "../Context/CartContext";

const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);
  const { cartOrder } = useContext(CartContext);
  const contador = cartOrder.length;

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "items");

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          // ...
        } else {
          const categories = snapshot.docs.map((item) => item.data().category);

          const uniqueCategories = [...new Set(categories)].sort();
          setItemsMenu(uniqueCategories);
        }
      })
      .catch((error) => {
        // ...
      });
  }, []);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="imgNavBar" src={Logo} alt="logo" />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Hamti cocina con amor
          </Link>
          <Nav className="me-auto">
            {itemsMenu?.map((item) => (
              <Link
                key={item}
                to={`/category/${item}`}
                className="mx-2 text-light"
                style={{ textDecoration: "none" }}
              >
                {item}
              </Link>
            ))}
          </Nav>
          <CardWidget contador={contador} />
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
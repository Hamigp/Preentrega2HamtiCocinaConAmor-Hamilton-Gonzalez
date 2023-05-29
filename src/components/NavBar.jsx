import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore"

import CardWidget from "./CardWidget";
import Logo from "../Assets/img/HamtiLOGO.png";


const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "items");

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          
        } else {
          const categories = snapshot.docs.map((item) => item.data().category);
          
          const uniqueCategories = [...new Set(categories)].sort();
                  setItemsMenu(uniqueCategories);
        }
      })
      .catch((error) => {
        
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

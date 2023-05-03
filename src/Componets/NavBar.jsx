import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CardWidget from "./CardWidget";
import Logo from "../Assets/img/Logo.jpg";

const NavBar = () => {
  return (
    <header>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className= "imgNavBar" src={Logo} alt="logo" />
          <Navbar.Brand href="#home">Hamti cocina con amor</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Utensillos</Nav.Link>
            <Nav.Link href="#features">Electrodomesticos</Nav.Link>
            <Nav.Link href="#pricing">Reposteria</Nav.Link>
            <Nav.Link href="#pricing">Cafetería</Nav.Link>
            <Nav.Link href="#pricing">Ollas y Sartenes</Nav.Link>
          </Nav>
          <CardWidget Contador={3} />
        </Container>
      </Navbar>
    </header>
  );
};
export default NavBar;

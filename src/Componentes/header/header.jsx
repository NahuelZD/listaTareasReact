import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Zelaya Distribuciones</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Nosotros</Nav.Link>
          <Nav.Link href="#features">Contacto</Nav.Link>
          <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Sandwiches de Miga</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Picadas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Combos Fiesta</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

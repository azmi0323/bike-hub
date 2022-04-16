import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Capture<span className="text-info fw-bold">The</span>Moment</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/orders">Blogs</Link>
            <Link to="/reviews">About</Link>
            <Link to="/register">Contact</Link>
            </Nav>
            <Nav>
              <button>Log In</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

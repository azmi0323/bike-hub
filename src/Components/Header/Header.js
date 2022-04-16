import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fs-2">
            Capture<span className="text-info fw-bold">The</span>Moment
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
            <Nav>
              <span className="fw-bold d-flex justify-content-center align-items-center text-primary">
                {user?.displayName && user.displayName}
              </span>
              {user?.uid ? (
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              ) : (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/signUp">Sign Up</Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

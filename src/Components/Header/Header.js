import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
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
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/">Home</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/blogs">Blogs</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/services">Services</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/about">About</NavLink>
            </Nav>
            <Nav>
              <span className="fw-bold d-flex justify-content-center align-items-center text-info">
                {user?.displayName && user.displayName}
              </span>
              {user ? (
                <button
                  className="btn fw-bold btn-danger ms-2"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              ) : (
                <div>
                  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/login">Login</NavLink>
                  
                  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/signUp">Sign Up</NavLink>
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

import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top shadow flexible-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown" className="ml-4">
            <Link to="/dashboard" className="ml-4 text-secondary">
              Dashboard
            </Link>
            <br />
            <Link to="/profile" className="ml-4 text-secondary">
              Profile
            </Link>
            <br />
            <Link to="/others" className="ml-4 text-secondary">
              Others
            </Link>
            <br />
            <NavDropdown.Divider />
            <Link to="/" className="ml-4 text-dark">
              Back
            </Link>
            <br />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;

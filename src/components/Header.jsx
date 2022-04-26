import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import centrLogo from "../public/images/centrLogo.png";
import ESFLogo from "../public/images/ESFLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/react-project">
          <img
            className="brandImage"
            src="https://staging-centr-web-cdn.loupactive.com/deploy/build/3.23.5-27953/49efd65f4ae62378a2978bc8adcb55e3.svg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="react-project/centr">
              <img className="brandImage" src={centrLogo} alt="" />
            </Link>
            <Link to="react-project/esf">
              <img className="brandImage" src={ESFLogo} alt="" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

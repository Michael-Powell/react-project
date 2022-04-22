import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import centrLogo from "../public/images/centrLogo.png";
import ESFLogo from "../public/images/ESFLogo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            className="brandImage"
            src="https://staging-centr-web-cdn.loupactive.com/deploy/build/3.23.5-27953/49efd65f4ae62378a2978bc8adcb55e3.svg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/centr">
              <img className="brandImage" src={centrLogo} alt="" />
            </Nav.Link>
            <Nav.Link href="/esf">
              <img className="brandImage" src={ESFLogo} alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

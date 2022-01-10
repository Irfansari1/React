//import "./Navbar.css";
import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.jpg";
import { useNavigate } from "react-router-dom";

// instead of <Nav.Link href="#home"> use Navigate

const MyNav = () => {
  const navigate = useNavigate();
  //react router dom dan cekince bir degisken tanimliyoruz...eventkey
  //eventkey in basilip basilmadigini anlamak icin de onSelect(fonksiyon ya da arrow function)
  //navigate ile ilgili adrese yönlendiriyor
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        onSelect={(eventKey) => navigate(`/${eventKey}`)}
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link eventKey="home">
              <img src={logo} alt="" style={{ width: "200px" }} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Destinations" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="world">World</NavDropdown.Item>
                <NavDropdown.Item eventKey="europe">Europe</NavDropdown.Item>
                <NavDropdown.Item eventKey="asia">Asia</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="about">About</Nav.Link>
              <Nav.Link eventKey="team">Team</Nav.Link>
              <Nav.Link eventKey="contact">Contact</Nav.Link>
              <Nav.Link eventKey="vlog">Vlog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;

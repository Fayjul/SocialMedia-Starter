import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav>
            <Button href="/auth" className="position">
              Login
            </Button>
            <Button href="/auth">Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://admission.sust.edu.bd/images/sust-logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top img-container"
              alt="React Bootstrap logo"
            />{' '}
            <img
              src="https://admission.sust.edu.bd/images/sust_name_omegle.png"
              width="600"
              height="60"
              className="d-inline-block align-bottom margin-left"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

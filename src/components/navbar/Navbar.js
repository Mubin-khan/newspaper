import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import style from './Navbar.module.css';

const Navbarr = () => {
      return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto" className={style.links}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#trump-news">Trump News</Nav.Link>
          <Nav.Link href="#bitcoin-news">Bitcoin News</Nav.Link>
          <Nav.Link href="#techcrunch-news">TechCrunch News</Nav.Link>
          <Nav.Link href="#bbc-news">BBC News</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      );
  };
  
  export default Navbarr;
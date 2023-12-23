import React from 'react'
import Logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../NavBar/NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import 'animate.css/animate.min.css';


const NavBar = () => {
  return (
    
<Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
        
      <LinkContainer to="/">
        <Navbar.Brand to="Home"><img className='logo' src={Logo} alt='Logo' /></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="About"> 
            <Nav.Link className="bt" href="#home">About me</Nav.Link>
            </LinkContainer>  
            <LinkContainer to="Skills"> 
            <Nav.Link className='bt' href="#link">Skills</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="Certifications"> 
            <Nav.Link className='bt' href="#link">Certifications</Nav.Link>
            </LinkContainer>
            <LinkContainer to="Projects"> 
            <Nav.Link className='bt' href="#link">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="Contact"> 
            <Nav.Link className='bt' href="#link">Contact me</Nav.Link>
            </LinkContainer>
            <Navbar.Brand className='welcome'>Welcome to my Portfolio!</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default NavBar
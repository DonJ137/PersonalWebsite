import React from 'react';
import BrandLogo from './BrandLogo.svg';
import BrandLogo2 from './VishLogo.png'
import CardImg from './unknown.png'
import CardImg2 from './vishalPortrait.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  

  return <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={BrandLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Lambda"
          />
          <img 
            src={BrandLogo2}
            width = "45"
            height = "35"
            className = "d-inline-block align-top"
            alt="Fish"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Kevin Haller // Vishal Kumar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Kevin</Nav.Link>
            <Nav.Link href="#link">About Vishal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br />

    <div className="card-deck">
      <Card className="d-flex flex-row justify-content-start" style={{ width: '75%' , margin: 'auto'}}>
        <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={CardImg} className="card-img-left" style={{ width: '45%', height: '100%', objectFit: 'contain' }} alt="Kevin" />
          <img src={CardImg2} className="card-img-bottom" style={{ width: '45%', height: '100%', objectFit: 'contain' }} alt="Vishal" />
        </Card.Body>
        <Card.Body>
          <h6>Hello, Our names are:</h6>
          <h3>Kevin Haller & Vishal Kumar</h3>
          <Card.Text>
            Click our About sections to learn more about us
          </Card.Text>
        </Card.Body>
    </Card>
  </div>

  



  </div>

  
}

export default App;

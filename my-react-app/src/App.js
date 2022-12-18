import BrandLogo from './BrandLogo.svg';
import CardImg from './unknown.png'
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
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Kevin Haller</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br />

    <div className="card-deck">
      <Card className="d-flex flex-row justify-content-start" style={{ width: '75%' , margin: 'auto'}}>
        <img src={CardImg} className="card-img-left" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Card image" />
        <Card.Body>
          <h6>Hello, My Name Is</h6>
          <h3>Kevin Haller</h3>
          <Card.Text>
            Here's some stuff about me
          </Card.Text>
        </Card.Body>
    </Card>
  </div>



  </div>

  
}

export default App;

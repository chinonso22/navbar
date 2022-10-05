import 'bootstrap/dist/css/bootstrap.min.css';  
import "./components/Boostrap.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
   
   <div>
    <Navbar className="fixed-top bg-white"  expand="lg">
      <Container className='content-wrapper'>
        <Navbar.Brand href="#home">  <div className="img-ctn">     <img src={require("../src/imagess/logo.png")}></img></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='nnn' >
        
            <Nav.Link Link="/home">About</Nav.Link>
            <Nav.Link Link="/link">What We Do</Nav.Link>
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
            <NavDropdown.Item Link="/action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item Link="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
                 Separated link
          </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item Link="/action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item Link="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
                 Separated link
          </NavDropdown.Item>
            </NavDropdown>
       
            <Nav.Link Link="/link">Contact Us</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

  );
}

export default BasicExample;

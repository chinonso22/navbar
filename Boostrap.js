import 'bootstrap/dist/css/bootstrap.min.css';  
import "./components/Boostrap.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  const source = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2957376410177!2d3.3510066639445593!3d6.484181527096416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d82b714c80f%3A0xf71c0c806611eaad!2sIntegrated%20Software%20Services%20Limited!5e0!3m2!1sen!2sng!4v1665069049341!5m2!1sen!2sng'
  const height = '450'
  const width = '600'
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

    <iframe src={source} height={height} width={width}/> 


    </div>



  );
}

export default BasicExample;

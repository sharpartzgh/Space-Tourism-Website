import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg'



const NavbarComponent = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className='textColor' href="#">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="logo"
            />
            </Navbar.Brand>
            <Navbar.Brand className='line' href="#">
                  {/* wondering why here is empty eeer check the className styling from the index.css */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='ToggleColor'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvas-mobile-bg"
            >
              <Offcanvas.Header closeButton closeVariant='white'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body  className=''>
                <Nav className="justify-content-end flex-grow-1 pe-3" variant="underline" defaultActiveKey="/home">
                  <Nav.Link className='textColor' href="/home">00 HOME</Nav.Link>
                  <Nav.Link className='textColor' href="/destination<"  eventKey="link-1">01 DESTINATION</Nav.Link>
                  <Nav.Link className='textColor' href="/crew" eventKey="link-2">02 CREW</Nav.Link>    
                  <Nav.Link className='textColor' href="technology" eventKey="link-3">03 TECHNOLOGY</Nav.Link> 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavbarComponent
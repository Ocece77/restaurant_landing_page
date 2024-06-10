import {Container ,Nav , Navbar}from 'react-bootstrap';
import { Link , Outlet} from 'react-router-dom';

const Navigation = () =>{
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary  rounded z-2">
        <Container fluid>
        <Navbar.Brand href="#home" className='fw-bold'>Cotton <span style={{color : "var(--color-pink)"}}>Candy</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="col-11 me-auto d-flex justify-content-center  rounded fw-bold  gap-5">
                <Nav.Link as={Link} to="/homepage">Home</Nav.Link>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
               </Nav>
             </Navbar.Collapse>
          </Container>
        </Navbar>

    <Outlet />
    </>


  );
}

export default Navigation;
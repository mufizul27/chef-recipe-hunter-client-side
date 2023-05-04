/* eslint-disable no-undef */
/*eslint-disable no-unused-vars */
import React, { useState ,useEffect, useContext} from 'react';
import { Link,Outlet, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { Button, Container, Nav, NavDropdown, Navbar, NavbarBrand } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import './Header.css'
import { AuthContext } from '../../component/providers/AuthProvider';
import Pdf from "react-to-pdf";
import DeliciousFood from '../DeliciousFood/DeliciousFood';
import PopularFood from '../PopularFood/PopularFood';
import Footer from '../Footer/Footer';
const ref = React.createRef();

const Header = () => {

  const location = useLocation();
  console.log(location.pathname);
  const {createUser,logOut,user}=useContext(AuthContext);
  console.log(user);
    return (
        <Container ref={ref}>
  <Navbar className='mt-4' bg="light" expand="lg" >
      <Container>
        <Navbar.Brand   href="#home">Bangladeshi Foods Item</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          {
            user && <img height={60} className='profileImage' src={user.photoURL} alt="" />
          }
        </Navbar.Collapse>
        
          {
          user!=null?  <button onClick={logOut}>Logout</button>:<Link to="/login" className="text-decoration-none">
          <Button className="">Login</Button>
        </Link>
          }
      </Container>
    </Navbar>

   
    <Outlet></Outlet>
    <DeliciousFood></DeliciousFood>
    <PopularFood></PopularFood>
    <Footer></Footer>

    {location.pathname=='/blog'&& <div className='mb-4 d-flex align-items-center justify-content-center'>
      
    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
      
      </div>}
        </Container>
      
    );
};

export default Header;
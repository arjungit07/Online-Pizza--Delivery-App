import React from 'react'
import  Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import{LinkContainer} from "react-router-bootstrap"
import { useSelector,useDispatch } from 'react-redux';
// import logo from "../images/slice & dice.jpg"

const NavBar = () => {
  const dispatch = useDispatch();
  const pizzaState =  useSelector(state=>state.cartReducer);
  console.log(pizzaState.cartItem, "in navbar")
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        {/* <Navbar.Brand className='nav'><img src={logo} alt='logo' style={{width:'220px',height: '220px'}}/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/login'>
            <Nav.Link className='bg-info' style={{padding:'50px'}}>Login</Nav.Link>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;
            
            <LinkContainer to='/cart'>
            <Nav.Link className='bg-info'>Cart {pizzaState.cartItems.length}</Nav.Link>
            </LinkContainer>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  
  )
}

export default NavBar
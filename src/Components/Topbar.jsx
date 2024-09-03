import React from 'react'
import  Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
import {BiSolidOffer} from 'react-icons/bi'

export const Topbar = () => {
  return (
    <>
   
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
        <Container fluid>
        <BiSolidOffer className='text-warning'></BiSolidOffer>&nbsp;&nbsp; 
            <h6 className='text-light'>Free Home delievery On Order Above 500-/</h6>
            <Nav className='ms-auto'>
                <LinkContainer to="/" >
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="About">
                    <Nav.Link>About us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="Contact">
                    <Nav.Link>Contact us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="Policy">
                    <Nav.Link>Terms and Conditions</Nav.Link>
                </LinkContainer>

            </Nav>
        </Container>
    </Navbar>
    </>
  )
}
export default Topbar


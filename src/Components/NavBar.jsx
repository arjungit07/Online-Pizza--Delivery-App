import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../action/cartAction";
import { logoutUser } from "../action/userAction";
import logo from '../logo/slice & dice.jpg'



const NavBar = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.cartReducer);
  // const userState = useSelector((state) => state.userLoginReducer)
  // const { currentUser } = userState
  // console.log(userState, "in navbar")

  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
  console.log(currentUser, "======>");

  useEffect(() => {
    const persistedCartItems = localStorage.getItem("cartItems");
    if (persistedCartItems) {
      dispatch(setCartItems(JSON.parse(persistedCartItems)));
    }
  }, [dispatch]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav">
        <Container style={{ marginTop: "30px" }}>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              style={{ width: "190px", height: "190px", borderRadius: "160px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                  <DropdownButton id="dropdown" title={currentUser.name}>
                    <LinkContainer to="/orders">
                      <Dropdown.Item>Order</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                  </DropdownButton>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link className="bg-light" style={{ padding: "50px" }}>
                      Login
                    </Nav.Link>
                  </LinkContainer>
                  &nbsp;&nbsp;&nbsp;
                  <LinkContainer to="/register">
                    <Nav.Link className="bg-light" style={{ padding: "50px" }}>
                      Register
                    </Nav.Link>
                  </LinkContainer>
                  &nbsp;&nbsp;&nbsp;
                </>
              )}
              {/* <LinkContainer to="/login">
                <Nav.Link className="bg-info" style={{ padding: "50px" }}>
                  Login
                </Nav.Link>
              </LinkContainer>
              &nbsp;&nbsp;&nbsp;
              <LinkContainer to="/register">
                <Nav.Link className="bg-info" style={{ padding: "50px" }}>
                  Register
                </Nav.Link>
              </LinkContainer>
              &nbsp;&nbsp;&nbsp; */}
              {currentUser && (
                <LinkContainer to="/cart">
                  <Nav.Link className="bg-info ms-4 rounded mb-0">
                    Cart {pizzaState.cartItems.length}
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

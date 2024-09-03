import React, { useEffect } from "react";
import { Row, Col, Tab,Nav } from "react-bootstrap";
import Pizzalist from "../Components/Admin/Pizzalist";
import Userslist from "../Components/Admin/Userslist";
import Orderlist from "../Components/Admin/Orderlist";
import AddNewPizza from "../Components/Admin/AddNewPizza";
const Adminscreen = () => {
  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
    console.log(currentUser)

  useEffect(() => {
    const user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
    if(user === null || user.isAdmin === false){
      window.location.href = "/"
    }
  }, []);
  return (
    <>
    <h1 className="text-center m-4 " style={{fontFamily:"revert",backgroundColor:'White',color:'black',margin:'0px'}}>Admin Panel</h1>
    <hr />
     <Tab.Container id="left-tabs-example" defaultActiveKey="/admin/pizzalist">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item style={{textDecoration:'underline white',fontSize:'17px'}}>
              <Nav.Link  eventKey="/admin/pizzalist">All Pizzas</Nav.Link>
              
              <Nav.Link eventKey="/admin/userlist">All Users</Nav.Link>
              <Nav.Link eventKey="/admin/addnewpizza">Add New Pizza</Nav.Link> 
              <Nav.Link eventKey="/admin/orderlist">All Orders</Nav.Link>
            </Nav.Item>
           
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="/admin/pizzalist"><Pizzalist/></Tab.Pane>
            <Tab.Pane eventKey="/admin/userlist"><Userslist/></Tab.Pane>
            <Tab.Pane eventKey="/admin/addnewpizza"><AddNewPizza/></Tab.Pane>
            <Tab.Pane eventKey="/admin/orderlist"><Orderlist/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  );
};

export default Adminscreen;


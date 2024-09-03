import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
// import Img from "react-bootstrap/Img";
import{FiPhoneCall} from "react-icons/fi";
import{HiOutlineMail} from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <h1 style={{marginBottom:'60px'}}>Slice and Dice</h1>
          <Col md={6}>
            <p>
              

{/* <h4 style={{fontFamily:'monospace'}}>Contact Us </h4> */}

</p>

<br />
<p style={{fontSize:"20px",fontFamily:'monospace',marginTop:'50px'}}> 
<b>We love hearing from our customers! If you have any questions, comments, or concerns, please don't hesitate to contact us.</b>
            </p>
            <Table striped bordered hover variant="dark" className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>--Contact Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FiPhoneCall/></td>
                  <td>Phone</td>
                  <td>0123456</td>
                </tr>
                <tr>
                  <td><HiOutlineMail/></td>
                  <td>E-mail</td>
                  <td>domain@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
          <img src="images/contact.jpg" alt = 'logo'/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

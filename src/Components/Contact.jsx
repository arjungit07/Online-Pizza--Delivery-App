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
          <h1>Slice and Dice</h1>
          <Col md={6}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nobis nulla ipsam est maiores eligendi porro nostrum,
              odio minima pariatur qui! Omnis provident illo praesentium
              laudantium fugit voluptatum sed quasi qui cupiditate est ab
              incidunt nemo deleniti magni reiciendis modi porro, veniam soluta
              quo commodi maiores necessitatibus quas unde! Quod fuga obcaecati
              perferendis nostrum, exercitationem laudantium cum debitis facere
              laboriosam non dolores inventore voluptatum accusamus tenetur,
              sunt id odio ratione necessitatibus minima tempore beatae
              veritatis? Incidunt cum possimus rerum doloribus ad labore dolor
              fugiat, magnam illo est, vitae iusto cupiditate quasi libero.
              Earum, ea? Facere ea enim esse cupiditate beatae?
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
          <img src="images/contact.jpg"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

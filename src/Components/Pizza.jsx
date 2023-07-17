import React, { useState } from "react";
import { Card, Button ,Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch} from "react-redux"
import {addToCart} from '../action/cartAction'

const Pizza = ({ pizza }) => {
  const [varients, setVarients] = useState("small");
  const [quantity, setquantity] = useState("1");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  
  const addToCartHandler = () => {
    dispatch(addToCart(pizza,quantity,varients))
    
  }
 
  return (
    <>
      <Card style={{ width: "18rem" ,margin:'50px 30px', cursor:'pointer'}} id={pizza._id}>
        <Card.Img variant="top" src={pizza.image} onClick={handleShow}/>
        <Card.Body>
          <Card.Title>{pizza.name} <hr/> </Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varients}
                  onChange={(e) => setVarients(e.target.value)}
                >
                  {pizza.varients.map((varients) => (
                    <option

                    //   onChange={(e) => setVarients(e.target.avlue)}
                    >
                      {varients}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity}  onChange={(e) => setquantity(e.target.value)}>
                  {[...Array(10).keys()].map((v, i) => (
                    <option
                      value={i + 1}
                     
                    >
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price:{pizza.prices[0][varients] * quantity}/Rs</Col>
            <Col md={6}>
            <Button
            onClick={()=>addToCartHandler()}
             variant="primary">Add to cart</Button>{' '}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div> <Card.Img variant="top" src={pizza.image}/></div>
        <div><h5 style={{marginTop:"10px"}}>Ingredients:</h5>
         <h6>{pizza.ingredients}</h6></div>
        </Modal.Body>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pizza;

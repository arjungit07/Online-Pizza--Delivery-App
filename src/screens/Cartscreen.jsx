import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const Cartscreen = () => {
  const  cartState = useSelector(state => state.cartReducer)
  const cartItem = cartState.cartItem
  console.log(cartItem)
  return (
    <>
    <Container>
        <Row>
            <Col  md={6}>
                <h1>Cart Items</h1>
            </Col>
            <Row>
              {
                cartItem.map((item)=>{
                  <>
                  <Col md={7}>
                    <h4>{item.name}</h4>
                  </Col>
                  <Col md={4}>
                    <h4>{item.name}</h4>
                  </Col>
                  </>
                })
              }
            </Row>
            <Col md={4}><h1>Payment Info</h1></Col>
        </Row>
    </Container>
    </>
  )
}

export default Cartscreen
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {BsPatchMinus} from 'react-icons/bs'
import {BsPatchPlus,BsTrash} from 'react-icons/bs'
import {addToCart,deleteFromCart} from '../action/cartAction'
import Checkout from '../Components/Checkout'


const Cartscreen = () => {
  const  cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems
const dispatch =useDispatch()
const subTotal= cartItems.reduce((x,item) => x+item.price,0)
  // console.log(cartItems)
  return (
    <>
    <Container>
        <Row>
            <Col  md={7}>
                <h1>Cart Items</h1>
            
            <Row>
              {
                cartItems.map(item =>(
                  <>
                 <Col md={7}>
                 <h5>{item.name} [{item.varient}]</h5>
                 
                  <h6>Price: {item.quantity}x{item.prices[0][item.varient]}= {item.price}</h6>
                 
                 <h6>Quantity:&nbsp;
                 <BsPatchMinus
                 className='text-danger'
                 onClick={()=>{dispatch(addToCart(item, item.quantity - 1,item.varient))}}
                 style={{cursor:'pointer'}}/>&nbsp;
                   {item.quantity}&nbsp;
                   <BsPatchPlus
                    className='text-success'
                   onClick={()=>{dispatch(addToCart(item, item.quantity +  1,item.varient))}}
                   style={{cursor:'pointer'}}/></h6>{" "}
                   <hr />
                 </Col> 
                 
                 <Col md ={5}>
                  <img src={item.image} alt='logo' style={{width:'180px',height:'80px',borderRadius:'8px'}}/>
                  <BsTrash className='text-danger' style={{cursor:'pointer',marginLeft:'20px'}}
                  onClick={()=>{dispatch(deleteFromCart(item))}}/>
                </Col>
                 </>
                 
                ))
              }
              
            </Row>
            </Col>
            <Col md={4}>
              <h1>Payment Info</h1>
              <h4>Subtotal:</h4>
              <h4>Rs:{subTotal}/-</h4>
              <Checkout subTotal = {subTotal}/>
              </Col>
              
        </Row>
    </Container>
    </>
  )
}

export default Cartscreen
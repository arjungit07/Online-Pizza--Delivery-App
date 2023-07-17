import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import AllPizzas from "../pizzadata.js"
import Pizza from '../Components/Pizza';
import {getAllPizzas} from "../action/pizzaAction.js"

const Homescreen = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector(state => state.getAllPizzaReducer)
  const {loading,pizzas,error} = pizzaState

  useEffect(()=> {dispatch(getAllPizzas())},[])
  return (
    <>
<Container className='home'>
  {
    loading ? (<h1>loading....</h1>)
    : error ? (<h1>Error while parsing...</h1>)
    :<Row>
    {pizzas?.map(pizza => (
     <Col md={4}>
        <Pizza pizza={pizza}/>
     </Col>
    ))} 
 </Row>
  }
   
</Container>
    </>
  )
}

export default Homescreen
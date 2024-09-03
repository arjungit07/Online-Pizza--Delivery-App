import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Container , Row,Col} from "react-bootstrap"
// import AllPizzas from "../pizzadata.js"
import Pizza from '../Components/Pizza';
import {getAllPizzas} from "../action/pizzaAction.js"
import Loader from '../Components/Loader';
import Filters from '../Components/Filters';

const Homescreen = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector(state => state.getAllPizzaReducer)
  const {loading,pizzas,error} = pizzaState

  useEffect(()=> {dispatch(getAllPizzas())},[dispatch])
  return (
    <>
<Container className='home'>
  {
    loading ? 
    (<Loader />)
    : error ? (<h1>Error while parsing...</h1>)
    :<Row>
      <Filters/>
    {pizzas?.map(pizza => (
     <Col md={4} key={pizza.name}>
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
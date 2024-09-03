import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "react-bootstrap";
import {AiFillDelete} from 'react-icons/ai'

// import AllPizzas from "../pizzadata.js"
import Pizza from "../../Components/Pizza";
import { deletePizza, getAllPizzas } from "../../action/pizzaAction.js";
import Loader from "../../Components/Loader";

const Pizzalist = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container className="home">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>Error while parsing...</h1>
        ) : (
          <Table responsive="sm" className="m-4">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
                pizzas &&
                pizzas.map((pizza) =>(
                  <tr>
                    <td>
                      <img style={{width:'180px',height:'80px',borderRadius:'8px'}} src={pizza.image} alt="" />
                    </td>
                    <td>{pizza.name}</td>
                    <td>small:{pizza.prices[0]['small']}
                    <br />
                    medium:{pizza.prices[0]['medium']}
                    <br />
                    large:{pizza.prices[0]['large']}</td>
                    <td>{pizza.category}</td>
                    <td>
                      <AiFillDelete style={{color:"red",cursor:'pointer'}}
                      onClick={()=>{dispatch(deletePizza(pizza._id))}}/> </td>
                  </tr>

                ))
             }
            </tbody>
          </Table>  
        )}
      </Container>
    </>
  );
};

export default Pizzalist;

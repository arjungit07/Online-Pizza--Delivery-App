import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUserOrders } from '../action/orderAction'
import Loader from '../Components/Loader'
import { Table } from 'react-bootstrap'

const Orderscreen = () => {

  const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const userState = useSelector(state => state.getUserOrderReducer)
const {loading,errors,orders} = userState

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserOrders(currentUser.name))
  }, [dispatch])
  return (
    <>
    <h1 style={{textAlign:"center",marginBottom:'30px',}}>Orders</h1>
    {loading && <Loader/>}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Email</th>
          <th>User</th>
          <th>Order Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          orders && 
          orders.map((order)=>(
            <tr>
              <td>
                {order._id}
              </td>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>Rs-/{order.orderAmount}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </>
  )
}

export default Orderscreen
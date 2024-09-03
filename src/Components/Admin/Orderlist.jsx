import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../../action/orderAction";
import { Table, Button } from "react-bootstrap";
import Loader from "../Loader";
import Error from "../Error";

const Orderlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const allordersstate = useSelector((state) => state.AllOrderReducer);
  const { orders, loading, error } = allordersstate;
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Orders</h1>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transectionId}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDeliverd ? (
                    <h6 className="text-success">Delivered</h6>
                  ) : (
                    <>
                      <Button className="btn-danger" onClick={() => {
                        dispatch(deliverOrder(order._id))
                      }}>Deliever</Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orderlist;

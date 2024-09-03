import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../action/orderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();

  
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token, "======++++++==>");
  };
  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51NWjqRSEj9iLICKhbskkoPzxyYdkqLD25iZr2EuAWJUMdPd3vJOjiVxM4aFO3tjuhIXnqJkpYZYvG8LcgnfbHVgs005yWsdlb4"
      currency="INR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
};

export default Checkout;

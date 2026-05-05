import axios from "axios";
import swal from "sweetalert";

const BASE_URL = "https://pizza-shop-backend.onrender.com"; // ✅ FIXED

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });

  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  const cartItems = getState().cartReducer.cartItems;

  try {
    await axios.post(`${BASE_URL}/api/orders/placeorder`, {
      token,
      subTotal,
      currentUser,
      cartItems,
    });

    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};

export const getUserOrders = (name) => async (dispatch) => {
  dispatch({ type: "USER_ORDER_REQUEST" });

  try {
    const response = await axios.post(
      `${BASE_URL}/api/orders/getuserorder`,
      { name }
    );

    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: "ALL_ORDER_REQUEST" });

  try {
    const response = await axios.get(
      `${BASE_URL}/api/orders/alluserorder`
    );

    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch) => {
  dispatch({ type: "GET_ALL_ORDER_REQUEST" });

  try {
    await axios.post(`${BASE_URL}/api/orders/deliverorder`, { orderid });

    swal("Success", "Order Delivered Successfully", "success");

    const orders = await axios.get(
      `${BASE_URL}/api/orders/alluserorder`
    );

    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });

    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};

import axios from "axios";
import swal from "sweetalert";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const res = await axios.post("https://pizza-shop-backend-1.onrender.com/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    // console.log(res, "res in token");
    // console.log(res, "res in token");
    // console.log(res, "res in token");

    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    // swal("Success", "Order Placed Successfully");
    // console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};

export const getUserOrders = (name) => async (dispatch) => {
  // const currentUser = getState().userLoginReducer.currentUser
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const response = await axios.post("https://pizza-shop-backend-1.onrender.com/api/orders/getuserorder", {
      name,
    });
    console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  // const currentUser = getState().userLoginReducer.currentUser
  // const currentUser = localStorage.getItem("currentUser")
  // ? JSON.parse(localStorage.getItem("currentUser"))
  // : null;
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const response = await axios.get("https://pizza-shop-backend-1.onrender.com/api/orders/alluserorder");
    console.log(response);
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "GET_ALL_ORDER_REQUEST",
  });
  try {
    await axios.post("https://pizza-shop-backend-1.onrender.com/api/orders/deliverorder", { orderid });
   swal("Success", "Order Delivered Successfully", "success");
    const orders = await axios.get("https://pizza-shop-backend-1.onrender.com/api/orders/alluserorder");
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};

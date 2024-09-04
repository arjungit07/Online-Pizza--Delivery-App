import axios from "axios";
import swal from "sweetalert";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("https://pizza-shop-backend-1.onrender.com/api/users/register", user);
    console.log(res);
    dispatch({ type: "USER_REQUEST_SUCCESS" });
    swal("Success", "User Register Successfully", "success");
    window.location.href = "/login";
  } catch (error) {
    // Check if the error response contains a message about email already existing
    if (
      error.response &&
      error.response.data.message === "Email already exists"
    ) {
      swal("Error", "Email is already registered", "error");
    } else {
      // Generic error handling
      swal("Error", "Something went wrong. Please try again later.", "error");
    }

    dispatch({ type: "USER_REQUEST_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("https://pizza-shop-backend-1.onrender.com/api/users/login", user);
    console.log("===>", response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const res = await axios.get("https://pizza-shop-backend-1.onrender.com/api/users/getallusers");
    console.log(res);
    dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("https://pizza-shop-backend-1.onrender.com/api/users/deleteuser", { userid });
    swal("User Deleted Succss!", "success");
    window.location.reload();
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};

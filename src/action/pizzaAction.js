import axios from "axios"
import swal from 'sweetalert';



export const getAllPizzas=() => async(dispatch)=>{
    dispatch({type:"GET_PIZZAS_REQUEST"})
    try {
        const res= await axios.get('https://pizza-shop-backend-1.onrender.com/api/pizza/getAllPizzas')
        console.log(res)
        dispatch({type:"GET_PIZZAS_SUCCESS",payload:res.data})

    } catch (err) {
        dispatch({type:"GET_PIZZAS_FAIL"})        
    }
}

export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: "ADD_PIZZAS_REQUEST" });
    try {
      await axios.post("https://pizza-shop-backend-1.onrender.com/api/pizza/addpizza", { pizza });
      dispatch({ type: "ADD_PIZZAS_SUCCESS" });
    } catch (err) {
      dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
    }
  };

export const deletePizza = (pizzaId) => async (dispatch) => {
try {
    const res = await axios.post('https://pizza-shop-backend-1.onrender.com/api/pizza/deletepizza',{
        pizzaId,
     })
    swal("Pizza Deleted Successfully", "success");
    console.log(res)
} catch (error) {
    swal("Something went wrong", "error");
}

}

export const filterPizza = (searchKey,category) => async (dispatch) => {
let filteredPizza;

dispatch({type:"GET_PIZZAS_REQUEST"})
try {
  const res = await axios.get('https://pizza-shop-backend-1.onrender.com/api/pizza/getAllPizzas')
  filteredPizza = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
  dispatch({type:"GET_PIZZAS_SUCCESS",payload:filteredPizza})
  if(category !== "all") {
    filteredPizza = res.data.filter(pizza => pizza.category.toLowerCase() === category)
    dispatch({type:"GET_PIZZAS_SUCCESS",payload:filteredPizza})
  }
} catch (error) {
  dispatch({type:"GET_PIZZAS_FAIL",payload:error})
}
}

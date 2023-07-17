import {useEffect} from 'react'
import {combineReducers,applyMiddleware} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzaReducer} from './reducers/pizzaReducer'
import {cartReducer} from './reducers/cartReducer'

//   useEffect(() => {
//     const cartItems = localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [];
  
//     // Dispatch an action to update the Redux store with the retrieved cartItems
//   }, []);


const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
})

const cartItems = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems')):[];

const initialState = {    
    cartReducer :{
       cartItems: cartItems
    },
};

const middleware = [thunk] 

const store = configureStore({reducer:rootReducer},initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;   

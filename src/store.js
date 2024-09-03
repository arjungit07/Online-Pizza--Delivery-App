// import {useEffect} from 'react'
import {combineReducers,applyMiddleware} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzaReducer,addPizzaReducer} from './reducers/pizzaReducer'
import {cartReducer} from './reducers/cartReducer'
import {userRegisterReducer,userLoginReducer,getAllUsersReducer} from './reducers/userReducer'
import {placeOrderReducer,getUserOrderReducer,AllOrderReducer} from './reducers/orderReducer'


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null

const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    addPizzaReducer:addPizzaReducer,
    AllOrderReducer:AllOrderReducer,
    getAllUsersReducer:getAllUsersReducer
})

const persistedItems = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems')):[];

const initialState = {    
    cartReducer :{
       cartItems: persistedItems  
    },
    userLoginReducer:{
        currentUser:currentUser
    }
};

const middleware = [thunk] 

const store = configureStore({reducer:rootReducer},initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;   

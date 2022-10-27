import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/Cart.Reducer";
import { getDataReducer } from "../modules/GetProduct/getProduct.Reducer";

export const rootReducer = combineReducers({
    getProduct:getDataReducer,
    cart: cartReducer,
 })
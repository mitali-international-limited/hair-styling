import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import your userReducer
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "../cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer, // Add more reducers as needed
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import your userReducer

const rootReducer = combineReducers({
  user: userReducer, // Add more reducers as needed
});

export default rootReducer;

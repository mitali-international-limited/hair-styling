import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "@/utils/helpers/axios";
import { User } from "@/utils/type";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};
export const setCurrentUser = createAsyncThunk(
  "user/setUser",
  async (user: object) => {
    try {
      const res = await axios.post("/auth/signup", user);
      if (res.status === 201) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }
      return res.data;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error; // Rethrow the error for Redux Toolkit to handle
    }
  }
);

// In userSlice.js

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (user: object) => {
    try {
      const response = await axios.post("/auth/signin", user);
      console.log("Response Sign iN: ", response);
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  }
);
export const signOutUser = createAction("user/signOutUser");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentUser.pending, (state) => {
      state.loading = true; // Set loading state to true when the async action starts
    });

    builder.addCase(setCurrentUser.fulfilled, (state, action) => {
      state.loading = false; // Set loading state to false when the async action succeeds
      state.currentUser = action.payload;
    });

    builder.addCase(setCurrentUser.rejected, (state, action) => {
      state.loading = false; // Set loading state to false when the async action fails
      // Handle the error if needed
      console.error("Async action failed:", action.error);
    });
    builder.addCase(signOutUser, (state) => {
      state.currentUser = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    });
  },
});
export default userSlice.reducer;

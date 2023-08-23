// categorySlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/helpers/axios"; // Import your HTTP client

// Async thunk action to fetch categories
export const fetchProducts = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get("/product/get/allproducts"); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

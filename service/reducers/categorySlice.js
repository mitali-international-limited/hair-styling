// categorySlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/helpers/axios"; // Import your HTTP client

// Async thunk action to fetch categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get("/category/get/allcategories"); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;

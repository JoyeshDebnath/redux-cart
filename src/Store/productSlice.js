import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
// enum like mechanism to holf the status

const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    Status: STATUS.IDLE,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
// ------------------------------------------------------

// Method 1 of creating thunks :

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    // loading statsus before api calls
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
      //   idel status after api calls over
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

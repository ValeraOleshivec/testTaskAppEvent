import { createSlice } from "@reduxjs/toolkit";
import { Product } from "app/Providers/store/types/types";
import { getProductList } from "features/ProductList/model/services/getProductList/getProductList";

export interface ProductListSchema {
  productList: Product[];
  error?: string;
  loading: boolean;
  cartList: Product[];
}
const initCartList = JSON.parse(localStorage.getItem("cartList"));

const initialState: ProductListSchema = {
  productList: [],
  error: undefined,
  loading: false,
  cartList: initCartList || [],
};

export const productListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    addInCart: (state, action) => {
      state.cartList = [...state.cartList, action.payload];
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter((el) => el.id !== action.payload);
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state, action) => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: productListActions } = productListSlice;

export const { reducer: productListReducer } = productListSlice;

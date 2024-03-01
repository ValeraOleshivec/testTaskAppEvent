import { productListReducer } from "features/ProductList/model/slice/productListSlice";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "app/Providers/store/types/types";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    productList: productListReducer,
  };
  const store = configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: false,
    preloadedState: initialState,
  });
  return store;
};

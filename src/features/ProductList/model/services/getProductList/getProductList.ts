import { createAsyncThunk } from "@reduxjs/toolkit";
import { productListActions } from "features/ProductList/model/slice/productListSlice";

interface getProductListProps {
  url?: string;
}
export const getProductList = createAsyncThunk<
  Record<string, any>,
  getProductListProps,
  { rejectValue: string }
>("task1/catalog", async ({ url }, thunkAPI) => {
  console.log("32323");
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (!json.items.length) {
      throw new Error("не удалось загрузить товары :(");
    }
    thunkAPI.dispatch(productListActions.setProductList(json.items));
  } catch (e) {
    alert(e.message);
    return thunkAPI.rejectWithValue("Что-то пошло не так при отправке запроса");
  }
});

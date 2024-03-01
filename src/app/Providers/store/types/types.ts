import { ProductListSchema } from "features/ProductList/model/slice/productListSlice";

export interface StateSchema {
  productList: ProductListSchema;
}
export interface Product {
  id: number;
  image: string;
  price: number;
  name: string;
}

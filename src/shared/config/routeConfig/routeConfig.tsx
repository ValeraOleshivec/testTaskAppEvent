import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { CartPage } from "pages/CartPage";

export enum AppRoutes {
  MAIN = "main",
  CART = "cart",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CART]: "/cart",
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
};

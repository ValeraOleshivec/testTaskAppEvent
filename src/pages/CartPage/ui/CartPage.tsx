import React from "react";
import { useSelector } from "react-redux";
import { getProductListState } from "features/ProductList/model/selectors/getProductList/getProductListState";
import { CartItem } from "entities/Cart";
import styles from "./CartPage.module.scss";

export const CartPage = () => {
  const { cartList } = useSelector(getProductListState);
  const totalPrice = cartList.reduce((acc, cur) => {
    console.log(acc);
    return acc + cur.price;
  }, 0);
  if (!cartList.length)
    return (
      <div className={styles.emptyCart}>
        <h1>Корзина пуста</h1>
      </div>
    );
  return (
    <div>
      {cartList.map((item) => (
        <CartItem {...item} />
      ))}
      <div className={styles.totalPriceBlock}>
        <p className={styles.totalPrice}>
          Итого:
          {totalPrice}
        </p>
      </div>
    </div>
  );
};

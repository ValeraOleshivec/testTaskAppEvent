import React from "react";
import styles from "./CartItem.module.scss";
import { Button } from "shared/ui/Button/ui/Button";
import { useDispatch } from "react-redux";
import { productListActions } from "features/ProductList/model/slice/productListSlice";
import { Product } from "app/Providers/store/types/types";
export const CartItem = ({ price, image, id, name }: Product) => {
  const dispatch = useDispatch();
  const handleRemoveCartItem = () => {
    dispatch(productListActions.removeFromCart(id));
  };
  return (
    <div className={styles.cartItem}>
      <img
        src={image}
        alt={"Картинка не подгрузилась :("}
        className={styles.image}
      />
      <p>{name}</p>
      <div className={styles.priceClearButtonBlock}>
        <p className={styles.price}>{price}р</p>
        <Button onClick={handleRemoveCartItem}>Убрать</Button>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./Card.module.scss";
import { Button } from "shared/ui/Button/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "features/ProductList/model/slice/productListSlice";
import { getProductListState } from "features/ProductList/model/selectors/getProductList/getProductListState";
import { useNavigate } from "react-router-dom";
import { Product } from "app/Providers/store/types/types";

export const Card = (props: Product) => {
  const { id, image, price, name } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartList } = useSelector(getProductListState);
  const inCart = cartList.some((product) => product.id === id);
  const handleClick = () => {
    if (inCart) {
      navigate("/cart");
      return;
    }
    dispatch(productListActions.addInCart(props));
  };

  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={"Картинка не загрузилась"}
        className={styles.image}
      />
      <p>{name}</p>
      <Button onClick={handleClick}>
        {inCart ? "Оформить заказ" : "В корзину"}
      </Button>
      <p>{price}</p>
    </div>
  );
};

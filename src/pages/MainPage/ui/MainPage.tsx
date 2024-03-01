import React from "react";
import styles from "./MainPage.module.scss";
import { Card } from "entities/ProductCard";
import { useSelector } from "react-redux";
import { getProductListState } from "features/ProductList/model/selectors/getProductList/getProductListState";
export const MainPage = () => {
  const { productList, loading } = useSelector(getProductListState);

  return (
    <div className={styles.mainPage}>
      {productList.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};

import React from "react";
import styles from "./MainPage.module.scss";
import { Card } from "entities/ProductCard";
export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

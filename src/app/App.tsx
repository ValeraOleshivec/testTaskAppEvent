import React, { useEffect, useLayoutEffect } from "react";
import "../../config/styles/global.scss";
import { AppRouter } from "app/Providers/router";
import { Navbar } from "widgets/NavBar";
import { getProductList } from "features/ProductList/model/services/getProductList/getProductList";
import { FETCH_LIST_URL } from "../../config/consts";
import { useDispatch } from "react-redux";

// ТУТ СДЕЛАЛ ANY из-за новой типизации диспатча, в старой версии оно было по дефолту
const App = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getProductList({ url: FETCH_LIST_URL }));
  }, []);
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;

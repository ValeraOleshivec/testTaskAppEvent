import React from "react";
import styles from "./Navbar.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getProductListState } from "features/ProductList/model/selectors/getProductList/getProductListState";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { cartList } = useSelector(getProductListState);
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>
        <img
          className={styles.image}
          src={
            "https://appevent.ru/tilda/images/tild6330-3035-4464-a563-653430356564__logo.svg"
          }
          alt={"Логотип компании не подгрузился"}
        />
      </Link>
      <Link to={"/cart"} className={styles.link}>
        <div className={styles.cartBlock}>
          <FaCartShopping size={50} />
          <div className={styles.cartCounter}>
            <p>{cartList.length}</p>
          </div>
        </div>
      </Link>
    </nav>
  );
};

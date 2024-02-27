import React from "react";
import styles from "./Navbar.module.scss";
import { FaCartShopping } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.image}
        src={
          "https://appevent.ru/tilda/images/tild6330-3035-4464-a563-653430356564__logo.svg"
        }
        alt={"Чёт не загрузилось"}
      />
      <div className={styles.cartBlock}>
        <FaCartShopping size={50} />
        <div className={styles.cartCounter}>
          <p>1</p>
        </div>
      </div>
    </nav>
  );
};

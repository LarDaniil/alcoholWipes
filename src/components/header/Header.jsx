import React from "react";
import { Link } from "react-router-dom";

import { HeaderLinks } from "./HeaderLinks";

import { Context } from "../../App";

import { SlBasket } from "react-icons/sl";

import styles from "./header.module.css";

export function Header() {
  const { basket } = React.useContext(Context);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderLinks styles={styles} />
        <Link to="tel:+795085885522" className={styles.telephone}>
          +7 950 8588 5522
        </Link>
        <Link className={styles.basket} to="/basket">
          <SlBasket style={{ width: "28px", height: "28" }} />
          <p>{(basket.length)}</p>
        </Link>
      </div>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";
import { CardBasket } from "./CardBasket";

import { BsArrowLeft } from "react-icons/bs";

import styles from "./basket.module.css";

export function Basket() {
  const { basket } = React.useContext(Context);
  console.log(basket);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="/">
          <BsArrowLeft />
          <p>Главная</p>
        </Link>
        <h1>Корзина</h1>
      </div>
      <div className={styles.delete}>
        <div className={styles.choose}>
          <div></div>
          <button>Выбрать все</button>
        </div>

        <button>Удалить выбранные</button>
      </div>
      {basket.map((obj, index) => (
        <CardBasket key={index} obj={obj} />
      ))}
      <div className={styles.order}>
        <h1>Детали заказа</h1>
        <div>
          <div>
            <p>Скидка: </p>
            <div className={styles.line}></div>
            <p>10 000</p>
          </div>
          <div>
            <h3>Итого: </h3>
            <div className={styles.line}></div>
            <h3>30 000</h3>
          </div>
        </div>
      </div>
      <button className={styles.click}>Перейти к оформлению</button>
    </div>
  );
}

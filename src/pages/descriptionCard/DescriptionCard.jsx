import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";
import { Header } from "../../components/header";
import { Six } from "../../components/main";
import { Footer } from "../../components/footer";

import styles from "./descriptionCard.module.css";

export function DescriptionCard({ obj }) {
  const [onClickBasket, setOnClickBasket] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [value, setValue] = React.useState(1);
  const [sum, setSum] = React.useState(obj.price[quantity]);

  const { basket, setBasket } = React.useContext(Context);

  React.useEffect(() => {
    setSum(obj.price[quantity]);
    setValue(1);
    setOnClickBasket(false);
    window.scrollTo(0, 0);
  }, [quantity]);

  function minus() {
    if (value > 1) {
      setValue(value - 1);
      setSum((res) => res - obj.price[quantity]);
    }
  }

  function plus() {
    setValue(Number(value) + 1);
    setSum((res) => res + obj.price[quantity]);
  }

  function click() {
    setOnClickBasket(true);
    if (!onClickBasket) {
      setBasket([...basket, { ...obj, quantity, value, sum }]);
    }
  }

  function change(event) {
    setValue(event.target.value);
    setSum(event.target.value * obj.price[quantity]);
  }

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.link}>
          <Link to="/catalog">Каталог</Link>
          <p>/</p>
          <p>{obj.title}</p>
        </div>
        <div className={styles.main}>
          <img
            src={obj.img + " " + obj.quantitys[quantity] + " шт.png"}
            alt="#"
          />
          <div className={styles.title}>
            <h1>{obj.title}</h1>
            <p>{obj.description}</p>
            <p>
              <span>Состав пропитки: </span>
              {obj.structure}
            </p>
            <p>
              <span>Условия хранения: </span>
              {obj.storageConditions}
            </p>
            <p>
              <span>Срок годности:</span>
              {obj.expirationDate}
            </p>
            <div className={styles.quantity}>
              {obj.quantitys.map((item, index) => (
                <button
                  key={index}
                  className={quantity === index ? styles.active : ""}
                  onClick={() => setQuantity(index)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.price}>
              <div>
                <button onClick={minus}>-</button>
                <input
                  type="text"
                  value={value}
                  onChange={(event) => change(event)}
                />
                <button onClick={plus}>+</button>
              </div>
              <p>{sum}</p>
            </div>
            <button
              className={onClickBasket ? styles.actives : styles.basket}
              onClick={click}
            >
              {onClickBasket ? "Товар в корзине" : "Добавить в корзину"}
            </button>
          </div>
        </div>
      </div>

      <Six />
      <Footer />
    </>
  );
}

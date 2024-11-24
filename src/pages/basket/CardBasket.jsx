import { FaRubleSign } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

import styles from "./cardBasket.module.css";
import React from "react";

export function CardBasket({ obj }) {
  const [value, setValue] = React.useState(obj.value);
  const [sum, setSum] = React.useState(obj.sum);

  function minus() {
    if (value > 1) {
      setValue(value - 1);
      setSum(sum - obj.price[obj.quantity]);
    }
  }

  function plus() {
    setValue(Number(value) + 1);
    setSum(sum + obj.price[obj.quantity]);
  }

  function change(event) {
    setValue(event.target.value);
    setSum(event.target.value * obj.price[obj.quantity]);
  }

  return (
    <div className={styles.card}>
      <button className={styles.checkbox}>
        <div></div>
      </button>
      <img
        src={obj.img + " " + obj.quantitys[obj.quantity] + " шт.png"}
        alt="#"
      />
      <p className={styles.title}>{obj.title}</p>

      <p className={styles.quantity}>{obj.quantitys[obj.quantity]} шт.</p>
      <div>
        <button onClick={minus}>-</button>
        <input type="text" value={value} onChange={(event) => change(event)} />
        <button onClick={plus}>+</button>
      </div>

      <p className={styles.price}>
        {sum}
        <FaRubleSign />
      </p>

      <button className={styles.delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";

export function Card({ styles, card }) {
  const { setNameCard } = React.useContext(Context);

  return (
    <div className={styles.card}>
      <img src={card.image.src} alt={card.image.alt} />
      <p>{card.name}</p>
      <h1>от {card.price} рублей</h1>
      <div className="flex pb-8 justify-center gap-4">
        <Link
          to={"/catalog/" + card.name}
          onClick={() => setNameCard(card.name)}
        >
          <button>Описание товара</button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../../../App";

import styles from "./one.module.css";

export function One() {
  const { onClickActiveLinkHeader } = React.useContext(Context);

  const images = [
    {
      className: styles.center,
      src: "images/one-str/centr.png",
      alt: "#",
    },
    {
      className: styles.left,
      src: "images/one-str/left.png",
      alt: "#",
    },
    {
      className: styles.right,
      src: "images/one-str/right.png",
      alt: "#",
    },
    {
      className: styles.bottom,
      src: "images/one-str/bottom.png",
      alt: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <h1>Спиртовые салфетки</h1>
        <p>Антибактериальные влажные салфетки</p>
        <Link to="/catalog" onClick={() => onClickActiveLinkHeader(1)}>
          Каталог
        </Link>
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <img
            key={index}
            className={image.className}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
}

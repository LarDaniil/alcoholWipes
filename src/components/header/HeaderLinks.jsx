import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Context } from "../../App";

export function HeaderLinks({ styles }) {
  const { activeLinkHeader, onClickActiveLinkHeader } =
    React.useContext(Context);

  const links = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "Каталог",
      href: "/catalog",
    },
    {
      name: "Доставка и оплата",
      href: "/delivery",
    },
    {
      name: "Опт",
      href: "/wholesale",
    },
    {
      name: "Контакты",
      href: "/contacts",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <Link
          key={index}
          className={clsx(
            activeLinkHeader === index ? styles.active : styles.link
          )}
          to={link.href}
          onClick={() => onClickActiveLinkHeader(index)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

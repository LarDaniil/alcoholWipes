import styles from "./four.module.css";

export function Four() {
  const images = [
    {
      className: styles.left,
      src: "images/four-str/left.png",
      alt: "#",
    },
    {
      className: styles.right,
      src: "images/four-str/right.png",
      alt: "#",
    },
    {
      className: styles.bottom,
      src: "images/four-str/buttom.png",
      alt: "#",
    },
  ];

  return (
    <div className={styles.container}>
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

      <div className={styles.title}>
        <h1>Для закупки оптовых партий антибактериальных салфеток Clinija</h1>
        <p>Оставьте свои контакты и с вами свяжется наш менеджер</p>
        <div className={styles.form}>
          <input type="text" placeholder="Телефон" />
          <input type="text" placeholder="Ваш Email" />
          <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
}

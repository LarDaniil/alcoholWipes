import styles from "./two.module.css";

export function Two() {
  const images = [
    {
      src: "images/two-str/1.png",
      alt: "#",
      text: "Биоспирт 75%",
    },
    {
      src: "images/two-str/2.png",
      alt: "#",
      text: "Не оставляет разводов",
    },
    {
      src: "images/two-str/3.png",
      alt: "#",
      text: "Не сушит кожу",
    },
    {
      src: "images/two-str/4.png",
      alt: "#",
      text: "Удаляет самые сложные загрязнения",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Преимущества салфеток Clinija</h1>
          <div style={{ display: "flex", gap: "32px" }}>
            <img src="images/two-str/left.png" alt="" />
            <img src="images/two-str/right.png" alt="" />
          </div>
        </div>
        <div className={styles.images}>
          {images.map((image, index) => (
            <div key={index} className={styles.image}>
              <img src={image.src} alt={image.alt} />
              <p>{image.text}</p>
            </div>
          ))}
          <img className={styles.line} src="images/two-str/line.png" alt="" />
        </div>
      </div>
    </div>
  );
}

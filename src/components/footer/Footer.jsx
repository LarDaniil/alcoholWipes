import styles from "./footer.module.css";

export function Footer() {
  const paymentImages = [
    {
      src: "/images/footer-str/paymentImg/visa.png",
      alt: "#",
    },
    {
      src: "/images/footer-str/paymentImg/master-card.png",
      alt: "#",
    },
    {
      src: "/images/footer-str/paymentImg/a-pay.png",
      alt: "#",
    },
    {
      src: "/images/footer-str/paymentImg/g-pay.png",
      alt: "#",
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>О компании</h1>
          <p>Компания</p>
          <p>
            ООО «ТД ВИТАОН-НН» Юридический адрес: 606000, г. Дзержинск, ул.
            Лермонтова 18ш
          </p>
        </div>
        <div className={styles.products}>
          <h1>Продукция</h1>
          <a href="/">Универсальные салфетки для автомобиля</a>
          <a href="/">Антисептические салфетки</a>
          <a href="/">«Универсальные салфетки» с антибактериальным эффектом</a>
          <a href="/">Салфетки универсальные для дома</a>
          <a href="/">Салфетки для пластика</a>
          <a href="/">Салфетки для стекол</a>
        </div>
        <div className={styles.contacts}>
          <a className={styles.telephone} href="tel:+78005504569">
            + 7 800 550 45 69
          </a>
          <a href="/" className={styles.mail}>
            <img src="images/footer-str/mail.png" alt="" />
            director@aintiseptic-nn.ru
          </a>
          <div className={styles.message}>
            <img src="images/footer-str/whats-app.png" alt="" />
            <img src="images/footer-str/telegram.png" alt="" />
          </div>
        </div>
      </div>
      <div style={{ background: "#85B971" }}>
        <div className={styles.payments}>
          {paymentImages.map((image, index) => (
            <img key={index} className="h-4" src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

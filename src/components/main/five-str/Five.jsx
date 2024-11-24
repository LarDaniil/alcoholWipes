import styles from "./five.module.css";

export function Five() {
  const items = [
    {
      src: "./images/five-str/left.png",
      alt: "#",
      h1: "Способы доставки",
      text1: "При заказе в города РФ",
      text2:
        "Самовывоз из Почты России, ТК СДЭК, (срок доставки до Почты России ~3-7 дней)",
      text3:
        "Курьерская доставка до двери ТК СДЭК (срок доставки до Почтой России ~2-7 дней)",
    },
    {
      src: "./images/five-str/right.png",
      alt: "#",
      h1: "Способы оплаты",
      text1: "При заказе по РФ онлайн",
      text2: "- Банковской картой,",
      text3: "- Apple Pay, Google Pay",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Доставка и оплата</h1>
        <p>
          Одно из преимуществ нашего времени – это возможности доставки и
          современные способы оплаты.
        </p>
      </div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.src} alt={item.alt} />
            <div className=" flex flex-wrap max-w-[342px] gap-3 text-lg leading-[21px]">
              <h1>{item.h1}</h1>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
              <p>{item.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import styles from "./six.module.css";

export function Six() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div style={{ color: "white" }}>
          <h1>Подпишитесь на нашу рассылку</h1>
          <p>Выгодные предложения и скидки </p>
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="Ваш Email" />
          <button>ПОДПИСАТЬСЯ</button>
        </div>
      </div>
    </div>
  );
}

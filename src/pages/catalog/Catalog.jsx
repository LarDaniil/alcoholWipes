import { Header } from "../../components/header";
import { Card } from "./Card";
import { Six } from "../../components/main";
import { Footer } from "../../components/footer";

import styles from "./catalog.module.css";

export function Catalog({ arrCards }) {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>Продукция Clinija</h1>
          <div className={styles.cards}>
            {arrCards.map((card, index) => (
              <Card key={index} styles={styles} card={card} />
            ))}
          </div>
        </div>
      </div>
      <Six />
      <Footer />
    </>
  );
}

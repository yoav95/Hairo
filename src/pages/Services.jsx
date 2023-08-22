import React from "react";
import styles from "./Services.module.css";
import Container from "../components/Container/Container";
import image from "../assets/service.jpg";
const Services = () => {
  return (
    <Container>
      <main className={styles.grid}>
        <div className={`${styles.box} ${styles.one}`}>
          <div className={styles.pre}>
            <h1>עיצוב ופיתוח אתרים</h1>
            <p>
              תהליך בניית אתר אינטרנט ועיצובו, הוא תהליך מורכב.אנחנו כאן כדי
              להפוך אותו לפשוט בשבילך!
            </p>
            <p>אצלנו, התהליך מורכב מארבעה שלבים:</p>
          </div>
          <div className={styles.step}>
            <div className={styles.badge}>1</div>
            <h2>עיצוב האתר</h2>
            <p>
              בשלב זה, אחרי שיחה איתכם, נגיש לכם עיצוב ראשוני. תוכלו לבחון אותו
              ולהחליט האם הוא מתאים לכןואם יש לכם הצעות\רעיונות לשיפור - אנחנו
              כאן כדי להקשיב
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.badge}>2</div>
            <h2>בניית האתר</h2>
            <p>
              אחרי שסגרנו יחד על עיצוב לאתר שלכם, אנו נתחיל בתהליך הארוך של
              כתיבת הקוד
              <br />
              בשלב זה, למעשה נכניס חיים לעיצוב שיצרנו, נהפוך אותו לריספונסיבי
              וחכם.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.badge}>3</div>
            <h2>העלאת האתר לאוויר</h2>
            <p>
              אחרי שנסיים את תהליך התיכנות, אנחנו נעלה את האתר לאינטרנט, שם נוכל
              לחבר אליו דומיין ולשתף אותו עם העולם!
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.badge}>4</div>
            <h2>קידום ותחזוקת האתר</h2>
            <p>
              אתר הוא כמו יצור חיי, הוא צריך שידאגו לו, ישנו אותו לפי צורך וכמו
              כן שמישהו ידאג שיופיע מול העיניים של אנשים - אלה הם תהליכים
              שדורשים תחזוקה מתמדת - ובשביל זה אנחנו פה!
            </p>
          </div>
        </div>
        <div className={`${styles.box} ${styles.two}`}></div>
      </main>
    </Container>
  );
};

export default Services;

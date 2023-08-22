import React, { useEffect } from "react";
import Container from "../components/Container/Container";
import video from "../assets/4.mp4";
import styles from "./Contact.module.css";
import image from "../assets/service.jpg";
import anime from "animejs";
import Button from "../components/UI/Button/Button";
const Contact = () => {
  return (
    <Container>
      <main className={styles.grid}>
        <div className={`${styles.box} ${styles.one}`}>
          <div className={styles.wrapper}>
            <form className={styles.form}>
              <div className={styles.control}>
                <div className={styles.input}>
                  <label>אימייל\מספר פלאפון</label>
                  <input />
                </div>
                <div className={styles.input}>
                  <label>שם מלא</label>
                  <input />
                </div>
              </div>
              <div className={styles.textarea}>
                <label>תוכן ההודעה</label>
                <textarea></textarea>
              </div>
              <Button size="md">שלח</Button>
            </form>
          </div>
        </div>
        <div className={`${styles.box} ${styles.two}`}></div>
        <div className={`${styles.box} ${styles.three}`}></div>
      </main>
    </Container>
  );
};

export default Contact;

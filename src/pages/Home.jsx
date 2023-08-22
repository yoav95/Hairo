import React, { useEffect } from "react";
import Container from "../components/Container/Container";
import video from "../assets/4.mp4";
import styles from "./Home.module.css";
import image from "../assets/service.jpg";
import anime from "animejs";
import Button from "../components/UI/Button/Button";
const Home = () => {
  useEffect(() => {}, []);

  const popUs = (action) => {
    switch (action) {
      case "about":
        anime
          .timeline({ loop: false })
          .add({
            targets: ".ml6 .letter",
            translateY: ["1.1em", 0],
            translateZ: 0,
            fontSize: "40px",
            duration: 750,
            delay: (el, i) => 50 * i,
          })
          .add({
            targets: ".ml6 .letter",
            fontSize: "27px",
          });
        break;
      case "contact":
        anime
          .timeline({ loop: false })
          .add({
            targets: ".ml5 .letter",
            translateY: ["1.1em", 0],
            translateZ: 0,
            fontSize: "40px",
            duration: 750,
            delay: (el, i) => 50 * i,
          })
          .add({
            targets: ".ml5 .letter",
            fontSize: "27px",
          });
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      <main className={styles.grid}>
        <div className={`${styles.box} ${styles.one}`}>
          <img src={image} />
          <h2>שירותים</h2>
        </div>
        <div className={`${styles.box} ${styles.two}`}>
          <div>
            <h1>
              אנחנו אוהבים ליצור
              <br />
              חוויה דיגיטלית מדהימה{" "}
            </h1>
            <h2>
              אנחנו עושים את זה במחיר
              <br />
              המשתלם ביותר
            </h2>
          </div>
          <h3>רוצה שנבנה לך את האתר?</h3>
          <Button size="lg">בואו נתחיל בתהליך</Button>
        </div>
        <div
          className={`${styles.box} ${styles.three}`}
          onMouseEnter={() => popUs("about")}
        >
          <h2 className="ml6">
            <span className="text-wrapper">
              <span className="letter">מ</span>
              <span className="letter">י</span>
              <span className="letter space"></span>
              <span className="letter">א</span>
              <span className="letter">נ</span>
              <span className="letter">ח</span>
              <span className="letter">נ</span>
              <span className="letter">ו</span>
            </span>
          </h2>
        </div>
        <div
          className={`${styles.box} ${styles.four}`}
          onMouseEnter={() => popUs("contact")}
        >
          <video src={video} autoPlay loop muted className={styles.video} />
          <h2 className="ml5">
            <span className="text-wrapper">
              <span className="letter">צ</span>
              <span className="letter">ו</span>
              <span className="letter">ר</span>
              <span className="letter space"></span>
              <span className="letter">ק</span>
              <span className="letter">ש</span>
              <span className="letter">ר</span>
            </span>
          </h2>
        </div>
      </main>
    </Container>
  );
};

export default Home;

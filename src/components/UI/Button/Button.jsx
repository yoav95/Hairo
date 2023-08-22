import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, size }) => {
  let btnStyles = styles.btn;
  if (size === "sm") {
    btnStyles = `${styles.btn} ${styles.small}`;
  }
  if (size === "md") {
    btnStyles = `${styles.btn} ${styles.medium}`;
  }
  if (size === "lg") {
    btnStyles = `${styles.btn} ${styles.large}`;
  }
  return (
    <button className={btnStyles}>
      <p>{children}</p>
    </button>
  );
};

export default Button;

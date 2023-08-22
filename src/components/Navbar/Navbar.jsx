import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Container from "../Container/Container";
import logoImage from "../../assets/Hairo.png";
import { NavLink } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";
import Button from "../UI/Button/Button";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  let listStyle = styles.list;
  if (isOpen) {
    listStyle = `${styles.list} ${styles.open}`;
  }
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={logoImage} />
            </NavLink>
          </div>

          <ul className={listStyle}>
            <li className={styles.navlink}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                צור קשר
              </NavLink>
            </li>
            <li className={styles.navlink}>אודות</li>
            <li className={styles.navlink}>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                שירותים
              </NavLink>
            </li>
            <li className={styles.navlink}>תיק עבודות</li>
            <li className={styles.navlink}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                ראשי
              </NavLink>
            </li>
          </ul>
          <div className={styles.navbtn}>
            <Button size="sm">
              <p>לשיחת ייעוץ ללא עלות</p>
            </Button>
          </div>
          <div className={styles.burger}>
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

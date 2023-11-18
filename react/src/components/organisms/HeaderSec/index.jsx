import styles from "./styles.module.scss";
import { useState } from "react";

const HeaderSec = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="header" className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["hamburger"]} onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
            <a href="#">
              <span className={styles["header_button"]}>Home</span>
            </a>
            <a href="#about">
              <span className={styles["header_button"]}>About me</span>
            </a>
            <a href="#skills">
              <span className={styles["header_button"]}>
                Skills & Abilities
              </span>
            </a>
            <a href="#career">
              <span className={styles["header_button"]}>Career Highlights</span>
            </a>
            <a href="#contact">
              <span className={styles["header_button"]}>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.menu_overlay} ${menuOpen ? styles.open : ""}`}>
        <div className={styles["menu"]}>
          <div className={styles["button"]} onClick={toggleMenu}>
            x
          </div>
          <a href="#">
            <span className={styles["header_button"]}>Home</span>
          </a>
          <a href="#about">
            <span className={styles["header_button"]}>About me</span>
          </a>
          <a href="#skills">
            <span className={styles["header_button"]}>Skills & Abilities</span>
          </a>
          <a href="#career">
            <span className={styles["header_button"]}>Career Highlights</span>
          </a>
          <a href="#contact">
            <span className={styles["header_button"]}>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderSec;

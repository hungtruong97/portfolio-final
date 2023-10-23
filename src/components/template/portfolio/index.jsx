import styles from "../portfolio/styles.module.scss";
import { useState } from "react";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section id={styles["header"]}>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={styles["hamburger"]} onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
              <a href="#">
                <span className={styles["header_button"]}>Home</span>
              </a>
              <a href="#">
                <span className={styles["header_button"]}>About me</span>
              </a>
              <a href="#">
                <span className={styles["header_button"]}>
                  Skills & Abilities
                </span>
              </a>
              <a href="#">
                <span className={styles["header_button"]}>
                  Career Highlights
                </span>
              </a>
              <a href="#">
                <span className={styles["header_button"]}>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id={styles["hero"]}>
        <div className={styles["container"]}>
          <div className={styles["rectangle"]}></div>
          <div className={styles["content"]}>
            <div className={styles["text"]}>
              <h1>Hi, I&apos;m Michael</h1>
              <h6>I&apos;m a jack of all trade</h6>
            </div>
            <div className={styles["photo"]}>
              <img
                src="/public/img/happy-bearded-man-busines-clothes-with-crossed-arms-looking-camera-gray_171337-11335.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about"></section>
      <section className="skills"></section>
      <section className="career"></section>
      <section className="contact"></section>
    </>
  );
};

export default Portfolio;

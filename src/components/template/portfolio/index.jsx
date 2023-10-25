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
        <div
          className={`${styles.menu_overlay} ${menuOpen ? styles.open : ""}`}
        >
          <div className={styles["menu"]}>
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
              <span className={styles["header_button"]}>Career Highlights</span>
            </a>
            <a href="#">
              <span className={styles["header_button"]}>Contact Me</span>
            </a>
          </div>
          <div className={styles["button"]} onClick={toggleMenu}>
            x
          </div>
        </div>
      </section>

      <section id={styles["hero"]}>
        <div className={styles["container"]}>
          <div className={styles["rectangle"]}></div>
          <div className={styles["content"]}>
            <div className={styles["text"]}>
              <h1>Hi, I&apos;m Michael</h1>
              <h2>I&apos;m a jack of all trade</h2>
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

      <section id={styles["about"]}>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={styles["photo"]}>
              <img
                src="/public/img/vertical-portrait-successful-middle-eastern-businessman-working-hotel-lobby-during-business-trip_236854-32155.webp"
                alt=""
              />
            </div>
            <div className={styles["text"]}>
              <h1>About me</h1>
              <div className={styles["text-block"]}>
                <div className={styles["title"]}>
                  <i className="fa-solid fa-caret-right"></i>
                  <h2>Who am I?</h2>
                </div>
                <div className={styles["body"]}>
                  Lorem ipsum dolor sit amet consectetur. Dui sagittis eu nisl
                  ac interdum a viverra. Id pretium turpis dolor cursus egestas
                  euismod et est ante. At viverra elit senectus tellus sit ut
                  sit lacinia vestibulum. Lobortis scelerisque faucibus ut morbi
                  egestas est tristique.
                </div>
              </div>

              <div className={styles["text-block"]}>
                <div className={styles["title"]}>
                  <i className="fa-solid fa-caret-right"></i>
                  <h2>How would I describe myself?</h2>
                </div>
                <div className={styles["body"]}>
                  Lorem ipsum dolor sit amet consectetur. Dui sagittis eu nisl
                  ac interdum a viverra. Id pretium turpis dolor cursus egestas
                  euismod et est ante. At viverra elit senectus tellus sit ut
                  sit lacinia vestibulum. Lobortis scelerisque faucibus ut morbi
                  egestas est tristique.
                </div>
              </div>

              <div className={styles["text-block"]}>
                <div className={styles["title"]}>
                  <i className="fa-solid fa-caret-right"></i>
                  <h2>Fun facts about me</h2>
                </div>
                <div className={styles["body"]}>
                  <div className={styles["list"]}>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                  </div>
                </div>
              </div>

              <div className={styles["text-block"]}>
                <div className={styles["title"]}>
                  <i className="fa-solid fa-caret-right"></i>
                  <h2>Who am I?</h2>
                </div>
                <div className={styles["body"]}>
                  <div className={styles["list"]}>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills"></section>
      <section className="career"></section>
      <section className="contact"></section>
    </>
  );
};

export default Portfolio;

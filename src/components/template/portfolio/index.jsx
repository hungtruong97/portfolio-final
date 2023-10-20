import styles from "../portfolio/styles.module.scss";

const Portfolio = () => {
  return (
    <>
      <section id={styles["header"]}>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
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
        </div>
      </section>
      <section className="hero"></section>
      <section className="about"></section>
      <section className="skills"></section>
      <section className="career"></section>
      <section className="contact"></section>
    </>
  );
};

export default Portfolio;

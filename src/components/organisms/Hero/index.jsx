import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles["hero"]}>
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
  );
};

Hero.propTypes = {};

export default Hero;

import styles from "./styles.module.scss";

const About = () => {
  return (
    <section id="about" className={styles["about"]}>
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
                Lorem ipsum dolor sit amet consectetur. Dui sagittis eu nisl ac
                interdum a viverra. Id pretium turpis dolor cursus egestas
                euismod et est ante. At viverra elit senectus tellus sit ut sit
                lacinia vestibulum. Lobortis scelerisque faucibus ut morbi
                egestas est tristique.
              </div>
            </div>

            <div className={styles["text-block"]}>
              <div className={styles["title"]}>
                <i className="fa-solid fa-caret-right"></i>
                <h2>How would I describe myself?</h2>
              </div>
              <div className={styles["body"]}>
                Lorem ipsum dolor sit amet consectetur. Dui sagittis eu nisl ac
                interdum a viverra. Id pretium turpis dolor cursus egestas
                euismod et est ante. At viverra elit senectus tellus sit ut sit
                lacinia vestibulum. Lobortis scelerisque faucibus ut morbi
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
  );
};

export default About;

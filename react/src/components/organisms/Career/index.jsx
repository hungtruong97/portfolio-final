import styles from "./styles.module.scss";

const Career = () => {
  return (
    <section id="career" className={styles["career"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h2>Career Highlights</h2>
          <div className={styles["row"]}>
            <div className={styles["timeline"]}>
              <div className={styles["line"]}></div>
              <div className={styles["activities"]}>
                <div className={styles["activity"]}>
                  <div className={styles["circle"]}>
                    <i className="fa-solid fa-circle"></i>
                  </div>
                  <div className={styles["activity-content"]}>
                    <div className={styles["name"]}>
                      <p>Graduated from Hitotsubashi University</p>
                    </div>
                    <div className={styles["duration"]}>
                      <p>3/2018</p>
                    </div>
                  </div>
                </div>
                <div className={styles["activity"]}>
                  <div className={styles["circle"]}>
                    <i className="fa-solid fa-circle"></i>
                  </div>
                  <div className={styles["activity-content"]}>
                    <div className={styles["name"]}>
                      <p>Joined Global Daily Vietnam</p>
                      <p>Manager</p>
                    </div>
                    <div className={styles["duration"]}>
                      <p>8/2018 - 3/2022</p>
                    </div>
                  </div>
                </div>
                <div className={styles["activity"]}>
                  <div className={styles["circle"]}>
                    <i className="fa-solid fa-circle"></i>
                  </div>
                  <div className={styles["activity-content"]}>
                    <div className={styles["name"]}>
                      <p>Joined Fourdigit Vietnam</p>
                      <p>Project Director</p>
                    </div>
                    <div className={styles["duration"]}>
                      <p>5/2022 - Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["textbox"]}>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                dolores, commodi nemo impedit rerum libero voluptas hic sequi?
                Error distinctio aliquid pariatur velit odit possimus ipsam
                impedit laborum placeat quas?
              </p>
              <h3>Projects</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                dolores, commodi nemo impedit rerum libero voluptas hic sequi?
                Error distinctio aliquid pariatur velit odit possimus ipsam
                impedit laborum placeat quas?Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Dicta ab, sunt sapiente dolorem,
                inventore reprehenderit voluptate repellendus dignissimos error
                nulla voluptates iure distinctio. Eaque quam nemo quis
                doloremque asperiores iste?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                dolores, commodi nemo impedit rerum libero voluptas hic sequi?
                Error distinctio aliquid pariatur velit odit possimus ipsam
                impedit laborum placeat quas? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Illo iusto in est quis amet culpa
                consectetur dolores laudantium. Quos aspernatur in iusto placeat
                impedit, sapiente aut molestias perferendis sunt! Inventore?
              </p>
            </div>
            <div className={styles["details"]}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

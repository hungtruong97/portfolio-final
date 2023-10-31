import styles from "../portfolio/styles.module.scss";
import { useState } from "react";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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
                <span className={styles["header_button"]}>
                  Career Highlights
                </span>
              </a>
              <a href="#contact">
                <span className={styles["header_button"]}>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${styles.menu_overlay} ${menuOpen ? styles.open : ""}`}
        >
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
      </section>

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
      <section id="skills" className={styles["skills"]}>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <h2>Skills and Abilities</h2>
            <div className={styles["cards"]}>
              <div className={styles["card"]}>
                <div className={styles["photo"]}>
                  <img src="/public/img/linguistic.webp" alt="" />
                </div>
                <div className={styles["title"]}>
                  <h3>Linguistic</h3>
                </div>
              </div>
              <div className={styles["card"]}>
                <div className={styles["photo"]}>
                  <img src="/public/img/project-management.webp" alt="" />
                </div>
                <div className={styles["title"]}>
                  <h3>Project Management</h3>
                </div>
              </div>
              <div className={styles["card"]}>
                <div className={styles["photo"]}>
                  <img src="/public/img/business.webp" alt="" />
                </div>
                <div className={styles["title"]}>
                  <h3>Business & Marketing</h3>
                </div>
              </div>
              <div className={styles["card"]}>
                <div className={styles["photo"]}>
                  <img src="/public/img/design.webp" alt="" />
                </div>
                <div className={styles["title"]}>
                  <h3>UX Design</h3>
                </div>
              </div>
              <div className={styles["card"]}>
                <div className={styles["photo"]}>
                  <img src="/public/img/coding.webp" alt="" />
                </div>
                <div className={styles["title"]}>
                  <h3>Coding</h3>
                </div>
              </div>
              <div className={styles["card"]}>
                <div className={styles["photo"]}>
                  <img src="/public/img/leadership.webp" alt="" />
                </div>
                <div className={styles["title"]}>
                  <h3>Leadership</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  inventore reprehenderit voluptate repellendus dignissimos
                  error nulla voluptates iure distinctio. Eaque quam nemo quis
                  doloremque asperiores iste?
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  dolores, commodi nemo impedit rerum libero voluptas hic sequi?
                  Error distinctio aliquid pariatur velit odit possimus ipsam
                  impedit laborum placeat quas? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illo iusto in est quis amet
                  culpa consectetur dolores laudantium. Quos aspernatur in iusto
                  placeat impedit, sapiente aut molestias perferendis sunt!
                  Inventore?
                </p>
              </div>
              <div className={styles["details"]}></div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={styles["contact"]}>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <h2>Contact Me</h2>
            <div className={styles["social"]}>
              <i className="fa-brands fa-facebook-messenger"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

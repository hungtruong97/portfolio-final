import styles from "./styles.module.scss";
import { useTheme } from "../../template/portfolio/ThemeContext";

const Contact = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <section id="contact" className={styles["contact"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h2>Contact Me</h2>
          <div className={styles["social"]}>
            <i className="fa-brands fa-facebook-messenger"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

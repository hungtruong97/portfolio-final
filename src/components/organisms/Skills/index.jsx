import styles from "./styles.module.scss";
import Card from "../../molecules/card";

const Skills = () => {
  return (
    <section id="skills" className={styles["skills"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h2>Skills and Abilities</h2>
          <div className={styles["cards"]}>
            <Card title="Linguistic" img="/public/img/linguistic.webp" />
            <Card
              title="Project Management"
              img="/public/img/project-management.webp"
            />
            <Card
              title="Business & Marketing"
              img="/public/img/business.webp"
            />
            <Card title="UX Design" img="/public/img/design.webp" />
            <Card title="Coding" img="/public/img/coding.webp" />
            <Card title="Leadership" img="/public/img/leadership.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

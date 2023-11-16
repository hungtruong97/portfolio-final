import styles from "./styles.module.scss";
import propTypes from "prop-types";
import { useState } from "react";

const Card = ({ title, img }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const toggleCard = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div className={styles["card"]} onClick={toggleCard}>
      <div className={styles["photo"]}>
        <img src={img} alt="" />
      </div>
      <div className={styles["title"]}>
        <h3>{title}</h3>
        <div className={`${styles.detail} ${cardOpen ? styles.open : ""}`}>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default Card;

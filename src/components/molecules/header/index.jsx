import Heading from "../../atoms/heading";
import styles from "../header/styles.module.scss";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className={styles.header}>
      <Heading level={3}>Home</Heading>
      <Heading level={3}>About me</Heading>
      <Heading level={3}>Skills & Abilities</Heading>
      <Heading level={3}>Career Highlight</Heading>
      <Heading level={3}>Contact me</Heading>
    </div>
  );
};

Header.propTypes = {};

export default Header;

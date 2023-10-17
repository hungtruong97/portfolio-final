import PropTypes from "prop-types";
import "../heading/styles.module.scss";

const Heading = ({ level, children, className }) => {
  const TagName = `h${level}`;
  return <TagName className={className}>{children}</TagName>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;

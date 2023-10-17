import PropTypes from "prop-types";

const Text = ({ tag, className, children }) => {
  const TagName = tag;
  return <TagName className={className}>{children}</TagName>;
};

Text.propTypes = {
  tag: PropTypes.oneOf(["p", "span", "div"]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;

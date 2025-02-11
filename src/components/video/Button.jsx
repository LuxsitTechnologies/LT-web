
import PropTypes from "prop-types";

export const Button = ({ size, variant, className, onClick, children }) => {
  return (
    <button
      className={`btn ${size} ${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  size: "",
  variant: "",
  className: "",
  onClick: () => {},
};

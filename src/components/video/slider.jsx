import PropTypes from "prop-types";

export const Slider = ({ value, onValueChange, max, step, className }) => {
  const handleChange = (e) => {
    onValueChange([parseFloat(e.target.value)]);
  };

  return (
    <input
      type="range"
      value={value[0]}
      onChange={handleChange}
      max={max}
      step={step}
      className={className}
    />
  );
};

Slider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onValueChange: PropTypes.func.isRequired,
  max: PropTypes.number,
  step: PropTypes.number,
  className: PropTypes.string,
};

Slider.defaultProps = {
  max: 100,
  step: 1,
  className: "",
};



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
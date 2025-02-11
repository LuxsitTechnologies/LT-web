
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
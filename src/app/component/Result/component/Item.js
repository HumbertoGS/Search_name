const Items = ({ label, value, className = "" }) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <label>{label}</label>
      <label>{value}</label>
    </div>
  );
};

export default Items;

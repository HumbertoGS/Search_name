const Items = ({ keyy, value }) => {
  return (
    <div className="flex justify-between" key={keyy}>
      <label>{keyy}</label>
      <label>{value}</label>
    </div>
  );
};

export default Items;

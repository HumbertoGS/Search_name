const Card = ({ Title, className = "", children }) => {
  return (
    <div className={`w-full ${className}`}>
      <p className="text-start px-9 pb-5 underline">{Title}</p>
      <div className="flex justify-start flex-col items-center">
        <div className="flex flex-col w-full px-16">{children}</div>
      </div>
    </div>
  );
};

export default Card;

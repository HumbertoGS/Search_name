const Card = ({ children }) => {
  return (
    <>
      <p className="text-start px-9 pb-5 underline">Result</p>
      <div className="flex justify-start flex-col items-center w-2/4">
        <div className="flex flex-col w-full px-28">{children}</div>
      </div>
    </>
  );
};

export default Card;

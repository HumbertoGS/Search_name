import { useState } from "react";

const CardBtn = ({ children, btnName, btnIcon }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-28">
      <button className="w-full" onClick={() => setShow(!show)}>
        <div className="flex justify-center items-center gap-3">
          {btnIcon} {btnName}
        </div>
      </button>

      {show &&
        typeof children === "function" &&
        children({ onClosed: () => setShow(false) })}
      {show && typeof children !== "function" && children}
    </div>
  );
};

export default CardBtn;

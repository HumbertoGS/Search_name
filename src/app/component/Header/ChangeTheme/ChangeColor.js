import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

const ChangeColor = ({ active, changeActive }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <button className="text-xl" onClick={changeActive}>
          {active ? <MdLightMode /> : <MdOutlineLightMode />}
        </button>
        <p className="text-xs pl-5 pt-5 pb-0 mb-0">
          Theme Dark: {active ? "On" : "Off"}
        </p>
      </div>
    </>
  );
};

export default ChangeColor;

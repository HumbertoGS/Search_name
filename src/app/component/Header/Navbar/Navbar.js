import CardBtn from "../Component/CardBtn";
import Register from "../Register/Register";

import { FaRegAddressCard } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-400 w-2/3">
        <CardBtn btnName="Register" btnIcon={<FaRegAddressCard />}>
          {({ onClosed }) => <Register onClosed={onClosed} />}
        </CardBtn>
        <CardBtn btnName="Edit" btnIcon={<SiReaddotcv />}>
          {({ onClosed }) => <div>hola</div>}
        </CardBtn>
      </div>
    </>
  );
};

export default Navbar;

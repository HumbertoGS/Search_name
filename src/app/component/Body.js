import { useState } from "react";
import Result from "./Result/Result";
import Search from "./Search/Search";

const Body = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Search consult={(x) => setValue(x)} />
      <Result value={value} />
    </>
  );
};

export default Body;

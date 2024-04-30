import { useState } from "react";

import useGetFetch from "@/app/hooks/useGetFetch";

import Result from "./Result/Result";
import Search from "./Search/Search";
import AllDataName from "./Result/AllDataName";

const Body = () => {
  const [value, setValue] = useState("");

  const getFetchAllData = useGetFetch("students");

  return (
    <>
      <Search consult={(x) => setValue(x)} />

      <div className="flex w-full">
        <AllDataName getFetchAllData={getFetchAllData} />
        <Result value={value} />
      </div>
    </>
  );
};

export default Body;

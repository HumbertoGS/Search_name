import useGetFetch from "@/app/hooks/useGetFetch";

import Card from "./component/Card";
import Items from "./component/Item";

import ResultData from "./ResultData";
import AllDataName from "./AllDataName";

const Result = ({ value }) => {
  const getFetchData = useGetFetch("student", true, value);
  const getFetchAllData = useGetFetch("students");

  return (
    <>
      <div className="flex w-full">
        <AllDataName getFetchAllData={getFetchAllData} />

        {getFetchData && getFetchData?.status === 200 && (
          <ResultData getFetchData={getFetchData} />
        )}
      </div>

      {getFetchData && getFetchData?.status !== 200 && (
        <Card>
          <Items keyy="Message:" value={getFetchData?.message} />
        </Card>
      )}
    </>
  );
};

export default Result;

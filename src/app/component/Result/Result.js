import useFetch from "@/app/hooks/useFetch";

const Result = ({ value }) => {
  const data = useFetch(value);

  return (
    <>
      <p className="text-start px-9 pb-5 underline">Result</p>
      <div className="flex justify-start flex-col items-center w-2/4">
        <div className="flex flex-col w-full px-28">
          {data &&
            Object.entries(data).map(([key, value]) => {
              if (key !== "id") {
                return (
                  <div className="flex justify-between" key={key}>
                    <label>{key}</label>
                    <label>{value}</label>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </>
  );
};

export default Result;

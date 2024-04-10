import { useState } from "react";

import useGetFetch from "@/app/hooks/useGetFetch";
import usePostFetch from "@/app/hooks/usePostFetch";

import { MdOutgoingMail } from "react-icons/md";

const Result = ({ value }) => {
  const [send, setSend] = useState(null);

  const getFetchData = useGetFetch(value);
  const postFetchData = usePostFetch(send, () => setSend(null));

  const sendEmail = (dataToSend) => {
    if (dataToSend) setSend(dataToSend);
  };

  return (
    <>
      {getFetchData && (
        <>
          <p className="text-start px-9 pb-5 underline">Result</p>
          <div className="flex justify-start flex-col items-center w-2/4">
            <div className="flex flex-col w-full px-28">
              {Object.entries(getFetchData).map(([key, value]) => {
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

          <button onClick={() => sendEmail(getFetchData)}>
            <MdOutgoingMail className="w-7 h-7" />
          </button>
        </>
      )}

      <div>{postFetchData && <p>{postFetchData.message}</p>}</div>
    </>
  );
};

export default Result;

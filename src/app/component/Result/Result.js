import { useState } from "react";

import useGetFetch from "@/app/hooks/useGetFetch";
import usePostFetch from "@/app/hooks/usePostFetch";

import Card from "./component/Card";
import Items from "./component/Item";

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
      {getFetchData && getFetchData?.status === 200 && (
        <>
          <Card>
            {Object.entries(getFetchData?.students).map(([key, value]) => {
              if (key !== "id") {
                return <Items keyy={key} value={value} />;
              }
              return null;
            })}
          </Card>

          <button onClick={() => sendEmail(getFetchData?.students)}>
            <MdOutgoingMail className="w-7 h-7" />
          </button>

          <div>{postFetchData && <p>{postFetchData.message}</p>}</div>
        </>
      )}

      {getFetchData && getFetchData?.status !== 200 && (
        <Card>
          <Items keyy="Message:" value={getFetchData?.message} />
        </Card>
      )}
    </>
  );
};

export default Result;

import { useState } from "react";

import Card from "./component/Card";
import Items from "./component/Item";

import usePostFetch from "@/app/hooks/usePostFetch";

import { MdOutgoingMail } from "react-icons/md";

const ResultData = ({ getFetchData }) => {
  const [send, setSend] = useState(null);

  const postFetchData = usePostFetch(send, () => setSend(null));

  const sendEmail = (dataToSend) => {
    if (dataToSend) setSend(dataToSend);
  };

  return (
    <div className="w-3/6">
      <Card Title="Result">
        {Object.entries(getFetchData?.response).map(([key, value]) => {
          if (key !== "id") {
            return <Items key={key} label={key} value={value} />;
          }
          return null;
        })}
      </Card>

      <div className="flex pt-5">
        <button
          className="pl-10"
          onClick={() => sendEmail(getFetchData?.response)}
        >
          <MdOutgoingMail className="w-7 h-7" />
        </button>

        {postFetchData && <p>{postFetchData.message}</p>}
      </div>
    </div>
  );
};

export default ResultData;

// usePostFetch.js
import { useEffect, useState } from "react";

const usePostFetch = (dta = null, path = null) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let url_API = `${process.env.NEXT_PUBLIC_API_NET_CORE}`;

    if (path) {
      url_API = `${url_API}/${path}`;
    }

    if (dta) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dta),
      };

      fetch(url_API, options)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [dta]);

  return data;
};

export default usePostFetch;

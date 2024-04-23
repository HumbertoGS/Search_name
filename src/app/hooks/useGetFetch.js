import { useCallback, useEffect, useState } from "react";

const useGetFetch = (path = null, requiredParams = false, params = null) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    let url_API = `${process.env.NEXT_PUBLIC_API_NET_CORE}`;

    if (path) {
      url_API = `${url_API}/${path}`;

      if (requiredParams) {
        if (params) url_API = `${url_API}/${params}`;
      }

      if (!requiredParams || (requiredParams && params)) {
        fetch(url_API)
          .then((response) => response.json())
          .then((responseData) => {
            setData(responseData);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    } else {
      setData(null);
    }
  }, [path, requiredParams, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export default useGetFetch;

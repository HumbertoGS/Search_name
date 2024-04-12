import { useEffect, useState } from "react";

const useGetFetch = (params = null) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let url_API = `${process.env.NEXT_PUBLIC_API_LARAVEL}`;

    if (params) {
      url_API = `${url_API}/${params}`;

      fetch(url_API)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [params]);

  return data;
};

export default useGetFetch;

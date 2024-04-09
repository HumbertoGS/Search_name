import { useEffect, useState } from "react";

const useFetch = (name) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (name !== "") {
      fetch(`${process.env.NEXT_PUBLIC_API_LARAVEL}/${name}`)
        .then((response) => response.json())
        .then((data) => setData(data.students));
    }
  }, [name]);

  return data;
};

export default useFetch;

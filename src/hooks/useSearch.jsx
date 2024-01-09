import React, { useEffect, useState } from 'react';

const useSearch = (queryTerm) => {
  const [data, setData] = useState([]);
  const url = `https://api.escuelajs.co/api/v1/products/?title=${queryTerm}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return { data };
};

export default useSearch;

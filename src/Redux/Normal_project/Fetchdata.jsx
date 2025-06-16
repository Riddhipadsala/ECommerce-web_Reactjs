import React, { useEffect, useState } from 'react';
import Procard from './Card';
// Function to fetch data
export const fetchdata = async () => {
  const response = await fetch("/My.json"); // Assuming it's a local JSON file
  const data = await response.json();
  return data;
};

// Functional component
function Raha() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchdata();
      setData(result);
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((e, index) => (
<Procard title={e.title} price={e.price}/>
      ))}
    </div>
  );
}

export default Raha;
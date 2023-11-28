"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  alpha: number;
  beta: number;
  delta: number;
  theta: number;
  gamma: number;
  mellow: number;
  concentration: number;
}

const DataStream = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data>(
          "http://localhost:8080/api/data"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 200);

    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <div>
      <h1>Data Stream</h1>
      {data && (
        <div>
          <p>Alpha: {data.alpha}</p>
          <p>Beta: {data.beta}</p>
          <p>Delta: {data.delta}</p>
          <p>theta: {data.theta}</p>
          <p>gamma: {data.gamma}</p>
          <p>concen: {data.alpha - data.beta}</p>
        </div>
      )}
    </div>
  );
};

export default DataStream;

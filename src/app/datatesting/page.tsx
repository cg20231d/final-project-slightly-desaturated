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
        // Calculate the concentration
        const concentration =
          response.data.beta +
          response.data.alpha -
          (response.data.theta + response.data.delta);
        response.data.concentration = concentration;
        setData(response.data);
        console.log(concentration);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 1000);

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
          <p>Theta: {data.theta}</p>
          <p>Gamma: {data.gamma}</p>
          <p>Mellow: {data.mellow}</p>
          <p>Concentration: {data.concentration}</p>
        </div>
      )}
    </div>
  );
};

export default DataStream;

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getCoinGraph } from "../../../api/queries";
import convertUTC from "../../../utils/convert-utc";
import ErrorMessage from "../../UI/ErrorMessage";
import Loader from "../../UI/Loader";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinGraph = ({ coin }) => {
  const { status, data, error } = useQuery("graph", () => getCoinGraph(coin.id, 30, "daily"));
  const [category, setCategory] = useState("prices");
  const [XLabels, setXLabels] = useState([]);
  const [YLabels, setYLabels] = useState([]);

  useEffect(() => {
    if (data) {
      const XLabels = data[category].map((item) => {
        return convertUTC(item[0]);
      });
      const YLabels = data[category].map((item) => {
        return item[1]
      });
      setXLabels(XLabels);
      setYLabels(YLabels);
    }
  }, [data, category]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const chartData = {
    labels: XLabels,
    datasets: [
      {
        fill: true,
        label: `${coin.name}'s price`,
        data: YLabels,
        borderColor: "#007fff",
        backgroundColor: "#0080ff4f",
      },
    ],
  };

  return (
    <StyledCoinGraph>
      {status === "loading" && <Loader center />}
      {error && <ErrorMessage>error.message</ErrorMessage>}
      {data && (
        <div>
          <Line options={chartOptions} data={chartData} />
        </div>
      )}
    </StyledCoinGraph>
  );
};

const StyledCoinGraph = styled.div`
  margin-top: 40px;
  max-width: 800px;
`;

export default CoinGraph;

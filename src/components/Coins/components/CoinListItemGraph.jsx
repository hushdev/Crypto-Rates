import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const CoinListItemGraph = ({ price }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: Array(price.length).fill(""),
    datasets: [
      {
        fill: false,
        data: price,
        borderWidth: 1,
        borderColor: price[0] <= price[price.length - 1] ? "#15bd2e" : "#ba1515",
      },
    ],
  };

  return (
    <StyledLine>
      <Line options={chartOptions} data={chartData} className="graph" />
    </StyledLine>
  );
};

const StyledLine = styled.div`
  .graph {
    height: 500px;
  }
`;

export default CoinListItemGraph;

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
        tension: 0.3,
      },
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: Array(50).fill(""),
    datasets: [
      {
        fill: false,
        data: price,
        borderWidth: 1,
        borderColor: price[0] <= price[price.length - 1] ? "#15bd2e" : "#ba1515",
      },
    ],
    options: {
      animation: false,
    },
  };

  return (
    <StyledLine>
      {/* This overlay is a hack to get rid of :hover tooltip in React-chartjs-2 */}
      <div className="overlay"></div>
      <Line options={chartOptions} data={chartData} className="graph" />
    </StyledLine>
  );
};

const StyledLine = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .graph {
    z-index: 1;
    height: 500px;
  }
`;

export default CoinListItemGraph;

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getCoinGraph } from "../../../api/queries";
import ErrorMessage from "../../UI/ErrorMessage";
import Loader from "../../UI/Loader";
import "react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

const CoinGraph = ({ coin }) => {
  const { status, data, error } = useQuery("graph", () => getCoinGraph(coin.id, 14));
  const [linesData, setLinesData] = useState([]);

  useEffect(() => {
    if (data) {
      const newLinesData = data.prices.map((item) => {
        return { x: item[0], y: item[1] };
      });
      setLinesData(newLinesData);
    }
  }, [data]);

  console.log(linesData);

  return (
    <StyledCoinGraph>
      {status === "loading" && <Loader center />}
      {error && <ErrorMessage>error.message</ErrorMessage>}
      {data && (
        <div>
          <XYPlot width={1100} height={600}>
            <LineSeries data={linesData} className="trend-line"/>
            <VerticalGridLines className="y-lines"/>
            <HorizontalGridLines className="x-lines"/>
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      )}
    </StyledCoinGraph>
  );
};

const StyledCoinGraph = styled.div`
  margin-top: 20px;
  .trend-line {
    stroke: #13b713 !important;
  }
  .x-lines, .y-lines {
    stroke: var(--gray-decor) !important;
    opacity: 0.1;
    stroke-width: 1px;
  }
`;

export default CoinGraph;

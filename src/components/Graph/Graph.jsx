import React from "react";
import Overview from "./components/Overview";
import CoinGraph from "./components/CoinGraph";

const Graph = ({ coin }) => {
  return (
    <>
      <Overview coin={coin} />
      <CoinGraph coin={coin}/>
    </>
  );
};

export default Graph;

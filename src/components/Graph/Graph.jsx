import React from "react";
import Overview from "./components/Overview";
import CoinGraph from "./components/CoinGraph";

const Graph = ({ coin }) => {
  return (
    <div>
      <Overview coin={coin} />
      <CoinGraph coin={coin}/>
    </div>
  );
};

export default Graph;

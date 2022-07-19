import React from "react";
import CoinsList from "./components/CoinsList";
import CoinsSearch from "./components/CoinsSearch";

const index = ({ list }) => {
  return (
    <>
      <CoinsSearch/>
      <CoinsList list={list}/>
    </>
  );
};

export default index;

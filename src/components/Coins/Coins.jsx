import React, { useState } from "react";
import CoinsList from "./components/CoinsList";
import CoinsSearch from "./components/CoinsSearch";

const Coins = ({ list }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <CoinsSearch onChange={setSearchQuery} />
      <CoinsList list={list} searchQuery={searchQuery} />
    </>
  );
};

export default  Coins;
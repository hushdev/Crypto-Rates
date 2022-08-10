import React, { useState } from "react";
import Title from "../UI/Title";
import CoinsList from "./components/CoinsList";
import CoinsSearch from "./components/CoinsSearch";

const Coins = ({ list }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Title size={2}>💰 Coins list</Title>
      {/* <CoinsSearch onChange={setSearchQuery} /> */}
      <CoinsList list={list} searchQuery={searchQuery} />
    </div>
  );
};

export default  Coins;
import React, { useState } from "react";
import CoinsList from "./components/CoinsList";
import CoinsSearch from "./components/CoinsSearch";

export default ({ list }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <>
      <CoinsSearch onChange={setSearchQuery}/>
      <CoinsList list={list} searchQuery={searchQuery}/>
    </>
  );
};


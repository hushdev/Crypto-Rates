import React, { useState } from "react";
import styled from "styled-components";
import Title from "../UI/Title";
import CoinsList from "./components/CoinsList";
import CoinsPagination from "./components/CoinsPagination";
// import CoinsSearch from "./components/CoinsSearch";

const Coins = ({ list, fetchPrev, fetchNext, page, isFetching }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledCoins>
      <Title size={2} className="title">
        💰 Coins list
        <CoinsPagination fetchPrev={fetchPrev} fetchNext={fetchNext} page={page} isFetching={isFetching}/>
      </Title>
      {/* <CoinsSearch onChange={setSearchQuery} /> */}
      <CoinsList list={list} searchQuery={searchQuery} />
    </StyledCoins>
  );
};

const StyledCoins = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Coins;

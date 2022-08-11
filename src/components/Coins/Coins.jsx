import React, { useState } from "react";
import styled from "styled-components";
import Title from "../UI/Title";
import CoinsList from "./components/CoinsList";
import CoinsPagination from "./components/CoinsPagination";

const Coins = ({ list, fetchPrev, fetchNext, page, isFetching }) => {
  return (
    <StyledCoins>
      <Title size={2} className="title">
        💰 Coins list
        <CoinsPagination fetchPrev={fetchPrev} fetchNext={fetchNext} page={page} isFetching={isFetching}/>
      </Title>
      <CoinsList list={list} />
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

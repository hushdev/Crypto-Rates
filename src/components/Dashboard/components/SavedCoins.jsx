import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../UI/Title";
import Loader from "../../UI/Loader";
import Row from "../../UI/Row";
import ErrorMessage from "../../UI/ErrorMessage";
import { useQuery } from "react-query";
import { getExactCoins } from "../../../api/queries";
import CoinCardInfo from "./CoinCardInfo";

const SavedCoins = () => {
  const [savedCoins, setSavedCoins] = useState([]);
  const [coinsList, setCoinsList] = useState([]);

  const { data, isLoading, error } = useQuery("exactCoins", () => getExactCoins(savedCoins), {
    enabled: savedCoins.length >= 1,
  });

  useEffect(() => {
    setCoinsList(data);
  }, [data]);

  useEffect(() => {
    setSavedCoins(JSON.parse(localStorage.getItem("savedCoins")));
  }, []);

  const removeCoinHandler = (coinId) => {
    const newSavedCoins = savedCoins.filter((item) => item !== coinId);
    const newCoinsList = coinsList.filter((item) => item.id !== coinId);
    console.log(newCoinsList);
    localStorage.setItem("savedCoins", JSON.stringify(newSavedCoins));
    setSavedCoins(newSavedCoins);
    setCoinsList(newCoinsList);
  };

  return (
    <StyledSavedCoins>
      {isLoading && <Loader center />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <Title size={2} className="info-title">
        Saved coins <span>7 days information</span>
      </Title>
      {data && (
        <Row flexWrap="no-wrap" overflowX="auto" padding="0 0 20px 0">
          {coinsList ? (
            coinsList?.map((coin, i) => <CoinCardInfo key={i} coin={coin} onRemove={removeCoinHandler} />)
          ) : (
            <ErrorMessage>No coins saved</ErrorMessage>
          )}
        </Row>
      )}
    </StyledSavedCoins>
  );
};

const StyledSavedCoins = styled.div`
  & .info-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      color: var(--text-gray);
      font-weight: 400;
    }
  }
`;

export default SavedCoins;

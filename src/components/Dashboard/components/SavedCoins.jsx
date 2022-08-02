import React from "react";
import styled from "styled-components";
import Title from "../../UI/Title";
import Loader from "../../UI/Loader";
import Row from "../../UI/Row";
import ErrorMessage from "../../UI/ErrorMessage";
import { useQuery } from "react-query";
import { getExactCoins } from "../../../api/queries";
import CoinCardInfo from "./CoinCardInfo";

const SavedCoins = () => {
  const { data, isLoading, error } = useQuery("exactCoins", () =>
    getExactCoins(["bitcoin", "tether", "usd-coin", "binancecoin", "ripple", "dai", "dogecoin"])
  );
  console.log(data);
  return (
    <StyledSavedCoins>
      {isLoading && <Loader center />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && (
        <>
          <Title size={2}>Saved coins</Title>
          <Row flexWrap="no-wrap" overflowX="auto" padding="0 0 20px 0">
            {data.map((coin, i) => (
              <CoinCardInfo key={i} coin={coin} />
            ))}
          </Row>
        </>
      )}
    </StyledSavedCoins>
  );
};

const StyledSavedCoins = styled.div``;

export default SavedCoins;

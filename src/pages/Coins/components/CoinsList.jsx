import React from "react";
import styled from "styled-components";

import Card from "../../../components/UI/Card";
import ErrorMessage from "../../../components/UI/ErrorMessage";
import CoinListItem from "./CoinListItem";

const CoinsList = ({ list, ...props }) => {
  return (
    <>
      {list.length > 0 && (
        <Card transparent>
          <StyledCoinsList>
            <li className="heading">
              <span className="image">Coin</span>
              <span className="symbol">Name</span>
              <span className="code"></span>
              <span>Price</span>
              <span className="ath">ATH</span>
              <span className="market_cap">Mkt Cap</span>
              <span>7 Days</span>
            </li>

            {list.map((coin, i) => (
              <CoinListItem coin={coin} key={i} />
            ))}
          </StyledCoinsList>
        </Card>
      )}
      {list.length === 0 && <ErrorMessage>Nothing found</ErrorMessage>}
    </>
  );
};

const StyledCoinsList = styled.ul`
  min-width: 380px;
  & li.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7px;
    border-bottom: 1px solid var(--gray-decor);
    span.image {
      max-width: 55px;
    }
    span {
      width: 104px;
      text-align: left;
      color: var(--blue);
      padding-bottom: 15px;
    }
    span.save {
      width: 33px;
    }
    @media (max-width: 721px) {
      span.ath,
      span.market_cap,
      span.symbol
       {
        display: none;
      }
    }
  }
`;

export default CoinsList;

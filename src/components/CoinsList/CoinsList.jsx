import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";

const CoinsList = ({ list, ...props }) => {
  return (
    <Card>
      <StyledCoinsList>
        <li className="heading">
          <span className="image">Coin</span>
          <span></span>
          <span></span>
          <span>Current Price</span>
          <span>ATH</span>
          <span>Mkt Cap</span>
          <span>Action</span>
        </li>
        {list.map((item) => (
          <li key={item.id}>
            <span className="image">
              <img src={item.image} alt={item.name} />
            </span>
            <span className="name">{item.name}</span>
            <span className="symbol">{item.symbol}</span>
            <span>${item.current_price}</span>
            <span>${item.ath}</span>
            <span>${item.market_cap}</span>
            <Button>Go to graph</Button>
          </li>
        ))}
      </StyledCoinsList>
    </Card>
  );
};

const StyledCoinsList = styled.ul`
  min-width: 920px;
  & li.heading {
    span.image {
      max-width: 55px;
    }
    span {
      width: 100%;
      max-width: 104px;
      text-align: left;
      color: var(--blue);
    }
  }
  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid var(--gray-decor);
    &:last-child {
      border-bottom: 0;
    }
    span.image {
      max-width: 55px;
      img {
        width: 30px;
        height: auto;
      }
    }
    span {
      color: var(--text-white);
      font-size: 14px;
    }
    span.symbol {
      text-transform: uppercase;
    }
    span.name {
      font-weight: 600;
    }
    span,
    button {
      width: 100%;
      max-width: 104px;
      text-align: left;
    }
  }
`;

export default CoinsList;

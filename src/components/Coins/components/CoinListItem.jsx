import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import convertNumber from "../../../utils/convert-number";
import { ReactComponent as StarSVG } from "../../../assets/svg/star.svg";
import CoinListItemGraph from "./CoinListItemGraph";

const CoinListItem = ({ coin }) => {
  const saveCoinHandler = (coin) => {
    //TODO - localstorage logic
    console.log("Saved: " + coin);
  };

  return (
    <StyledCoinListItem>
      <span className="image">
        <StarSVG onClick={() => saveCoinHandler(coin.name)} className="heart" />
        <NavLink to={`graph/${coin.id}`}>
          <img src={coin.image} alt={coin.name} loading="lazy" />
        </NavLink>
      </span>
      <span className="name">
        <NavLink to={`graph/${coin.id}`}>{coin.name}</NavLink>
      </span>
      <span className="symbol">{coin.symbol}</span>
      <span>$ {convertNumber(coin.current_price)}</span>
      <span className="ath">$ {convertNumber(coin.ath)}</span>
      <span className="market_cap">$ {convertNumber(coin.market_cap)}</span>
      <span>
        <CoinListItemGraph price={coin.sparkline_in_7d.price} />
      </span>
    </StyledCoinListItem>
  );
};

const StyledCoinListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-bottom: 1px solid var(--gray-decor);
  height: calc(50px - 15px);

  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background-color: var(--gray);
  }

  & span.image {
    max-width: 55px;
    display: flex;
    align-items: center;
    svg {
      width: 13px;
      height: 13px;
      fill: var(--text-gray);
      transition: 0.2s ease;
      cursor: pointer;
      &:hover {
        fill: var(--blue);
      }
    }
    a {
      display: flex;
      align-items: center;
      margin-left: 10px;
      img {
        width: 25px;
        height: auto;
      }
    }
  }
  & span {
    color: var(--text-gray);
    font-size: 14px;
    font-weight: 400;
    margin: 0 5px;
    &:first-child {
      margin: 0 5px 0 0;
    }
    &:first-child {
      margin: 0 0 0 5px;
    }
  }
  & span.symbol {
    text-transform: uppercase;
  }
  & span.name {
    a {
      color: var(--text-white);
      text-decoration: none;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & span {
    width: 100%;
    max-width: 104px;
    text-align: left;
  }
  @media (max-width: 721px) {
    & .ath,
    & .market_cap,
    & .symbol {
      display: none;
    }
  }
 
`;

export default CoinListItem;

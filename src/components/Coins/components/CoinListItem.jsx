import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import convertNumber from "../../../utils/convert-number";
import { ReactComponent as StarSVG } from "../../../assets/svg/star.svg";

const CoinListItem = ({ coin }) => {
  const saveCoinHandler = (coin) => {
    //TODO - localstorage logic
    console.log("Saved: " + coin);
  };

  return (
    <StyledCoinListItem>
      <span className="image">
        <NavLink to={`graph/${coin.id}`}>
          <img src={coin.image} alt={coin.name} />
        </NavLink>
      </span>
      <span className="name">
        <NavLink to={`graph/${coin.id}`}>{coin.name}</NavLink>
      </span>
      <span className="symbol">{coin.symbol}</span>
      <span>$ {convertNumber(coin.current_price)}</span>
      <span>$ {convertNumber(coin.ath)}</span>
      <span>$ {convertNumber(coin.market_cap)}</span>
      <span className="save">
        <StarSVG onClick={() => saveCoinHandler(coin.name)} className="heart" />
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
  height: calc(43px - 7px);
  
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
    img {
      width: 25px;
      height: auto;
    }
  }
  & span {
    color: var(--text-gray);
    font-size: 14px;
    font-weight: 400;
  }
  & span.save {
    width: 33px;
    svg {
      width: 33px;
      height: 15px;
      fill: var(--text-gray);
      transition: 0.2s ease;
      cursor: pointer;
      &:hover {
        fill: var(--blue);
      }
    }
  }
  & span.symbol {
    text-transform: uppercase;
  }
  & span.name {
    a {
      color: var(--text-white);
      text-decoration: none;
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
`;

export default CoinListItem;

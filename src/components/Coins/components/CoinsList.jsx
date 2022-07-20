import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Card from "../../UI/Card";
import convertNumber from "../../../utils/convert-number";

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
        </li>
        {list.map((item) => (
          <li key={item.id}>
            <span className="image">
              <img src={item.image} alt={item.name} />
            </span>
            <span className="name">
              <NavLink to={`graph/${item.id}`}>{item.name}</NavLink>
            </span>
            <span className="symbol">{item.symbol}</span>
            <span>$ {convertNumber(item.current_price)}</span>
            <span>$ {convertNumber(item.ath)}</span>
            <span>$ {convertNumber(item.market_cap)}</span>
          </li>
        ))}
      </StyledCoinsList>
    </Card>
  );
};

const StyledCoinsList = styled.ul`
  min-width: 700px;
  & li.heading {
    span.image {
      max-width: 55px;
    }
    span {
      width: 100%;
      max-width: 104px;
      text-align: left;
      color: var(--blue);
      font-weight: 500;
      padding-bottom: 15px;
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
      color: var(--text-gray);
      font-size: 14px;
      font-weight: 400;
    }
    span.symbol {
      text-transform: uppercase;
    }
    span.name {
      a {
        color: var(--text-white);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    span {
      width: 100%;
      max-width: 104px;
      text-align: left;
    }
  }
`;

export default CoinsList;
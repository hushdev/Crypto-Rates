import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../UI/Card";
import ErrorMessage from "../../UI/ErrorMessage";
import CoinListItem from "./CoinListItem";

const CoinsList = ({ list, searchQuery, ...props }) => {
  const [filteredList, setFilteredList] = useState([...list]);

  useEffect(() => {
    if (searchQuery.length <= 1) {
      setFilteredList([...list]);
    } else {
      setFilteredList(
        list.filter((coin) => coin.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()))
      );
    }
  }, [searchQuery, list]);

  return (
    <>
      {filteredList.length > 0 && (
        <Card>
          <StyledCoinsList>
            <li className="heading">
              <span className="image">Coin</span>
              <span className="symbol">Name</span>
              <span className="code">Symbol</span>
              <span>Price</span>
              <span className="ath">ATH</span>
              <span className="market_cap">Mkt Cap</span>
              <span>7 Days</span>
              <span className="save">Save</span>
            </li>

            {filteredList.map((coin, i) => (
              <CoinListItem coin={coin} key={i} />
            ))}
          </StyledCoinsList>
        </Card>
      )}
      {filteredList.length === 0 && <ErrorMessage>Nothing found</ErrorMessage>}
    </>
  );
};

const StyledCoinsList = styled.ul`
  min-width: 380px;
  & li.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    border-bottom: 1px solid var(--gray-decor);
    height: calc(43px - 7px);
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
    @media (max-width:480px) {
      span {
        width: unset;
      }
      span.code {
        display: none;
      }
    }
  }
`;

export default CoinsList;

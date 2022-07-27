import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorMessage from "../../UI/ErrorMessage";
import CoinListItem from "./CoinListItem";

const CoinsList = ({ list, searchQuery, ...props }) => {
  const [filteredList, setFilteredList] = useState([...list]);
  // const [page, setPage] = useState(1);
  const cardRef = useRef();

  useEffect(() => {
    if (searchQuery.length <= 1) {
      setFilteredList([...list]);
    } else {
      setFilteredList(
        list.filter((coin) =>
          coin.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
        )
      );
    }
  }, [searchQuery, list]);

  const scrollHandler = () => {
    console.log(cardRef.current.scrollTop);
  }

  return (
    <>
      {filteredList.length > 0 && (
        <Card height="calc(100vh - 270px)" innerRef={cardRef} onScroll={scrollHandler}>
          <StyledCoinsList>
            <li className="heading">
              <span className="image">Coin</span>
              <span></span>
              <span></span>
              <span>Price</span>
              <span>ATH</span>
              <span>Mkt Cap</span>
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
  min-width: 670px;
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
  }
`;

export default CoinsList;
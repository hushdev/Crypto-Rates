import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const RatesList = ({ list, ...props }) => {
  return (
    <Card>
      <StyledRatesList>
        <li className="heading">
          <span>Picture</span>
          <span>Name</span>
          <span>Code</span>
          <span>Price</span>
        </li>
        {list.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.symbol}</span>
            <span>${item.ath}</span>
          </li>
        ))}
      </StyledRatesList>
    </Card>
  );
};

const StyledRatesList = styled.ul`
  & li.heading {
    background-color: var(--gray-decor);
    border-radius: 10px;
  }
  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid var(--gray-decor);
    &:hover {
      background-color: var(--gray-decor);
      border-radius: 10px;
    }
    &:last-child {
      border-bottom: 0;
    }
    img {
      width: 30px;
      height: auto;
    }
    span {
      color: var(--text-white);
      text-align: center;
    }
  }
`;

export default RatesList;

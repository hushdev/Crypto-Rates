import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
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
          <span>Action</span>
        </li>
        {list.map((item) => (
          <li key={item.id}>
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <span>{item.name}</span>
            <span>{item.symbol}</span>
            <span>${item.ath}</span>
            <Button>Go to graph</Button>
          </li>
        ))}
      </StyledRatesList>
    </Card>
  );
};

const StyledRatesList = styled.ul`
  min-width: 450px;
  & li.heading {
    span {
      width: 100%;
      max-width: 101px;
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
    .image img {
      width: 30px;
      height: auto;
    }
    span {
      color: var(--text-white);
    }
    span,
    button,
    .image {
      width: 100%;
      max-width: 101px;
      text-align: left;
    }
  }
`;

export default RatesList;

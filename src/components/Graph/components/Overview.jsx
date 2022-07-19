import React from "react";
import styled from "styled-components";
import convertNumber from "../../../utils/convert-number";
import Title from "../../UI/Title";

const Overview = ({ coin }) => {
  const priceChangeClass =
    coin.market_data.price_change_percentage_24h > 0 ? "green" : "red";

  return (
    <StyledOverview>
      <Title size={2}>
        <img src={coin.image.small} alt={coin.name} />
        {coin.name}
      </Title>
      <Title size={4}>
        ${coin.market_data.current_price.usd}
        <span className={priceChangeClass}>
          &nbsp;${convertNumber(coin.market_data.price_change_24h)} (24h)
        </span>
      </Title>
      {coin.description.en && (
        <p dangerouslySetInnerHTML={{ __html: coin.description.en }}></p>
      )}
    </StyledOverview>
  );
};

const StyledOverview = styled.div`
  & h2 {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      width: 40px;
      height: auto;
    }
  }
  & h4 {
    span {
      color: var(--text-white);
      margin-left: 15px;
    }
    span.green {
      color: green;
      &::before {
        content: "+";
      }
    }
    span.red {
      color: red;
      &::before {
        content: "-";
      }
    }
  }

  & p {
    color: var(--text-gray);
    a {
      color: var(--blue);
    }
  }
`;
export default Overview;

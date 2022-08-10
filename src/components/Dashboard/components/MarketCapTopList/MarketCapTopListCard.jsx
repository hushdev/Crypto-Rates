import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Card from "../../../UI/Card";
import Chip from "../../../UI/Chip";
import Title from "../../../UI/Title";

const CoinCardInfo = ({ coin }) => {
  const rank = coin.market_cap_rank;

  return (
    <StyledCoinCardInfo>
      <NavLink to={`/graph/${coin.id}`} className="navlink">
        <Card className="card">
          <Title size={4} className="title">
            <span className="title-main">
              <img src={coin.small} alt={coin.name} />
              {coin.name}
            </span>
            <Chip className="chip">#{rank}</Chip>
          </Title>
        </Card>
      </NavLink>
    </StyledCoinCardInfo>
  );
};

const StyledCoinCardInfo = styled.div`
  width: calc(33.3% - 20px);
  margin: 10px;
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 450px) {
    width: calc(100%);
    margin: 10px 0;
    &:first-child {
      margin: 0 0 10px 0;
    }
  }
  .navlink {
    text-decoration: none;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        &-main {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            margin-right: 7px;
          }
        }
        .chip {
          font-size: 12px;
        }
      }
    }
  }
`;

export default CoinCardInfo;

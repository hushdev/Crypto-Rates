import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import convertNumber from "../../../utils/convert-number";
import Card from "../../UI/Card";
import Chip from "../../UI/Chip";
import Title from "../../UI/Title";
import Button from "../../UI/Button";

const CoinCardInfo = ({ coin, onRemove }) => {
  const price = convertNumber(coin.current_price);
  const priceChangeClass =
    coin.price_change_percentage_7d_in_currency.toString().slice(0, 5) > 0 ? "green" : "red";
  const priceChangePercentage = `${coin.price_change_percentage_7d_in_currency.toString().slice(0, 4)}%`;

  const removeCoin = (e) => {
    e.preventDefault();
    onRemove(coin.id);
  };

  return (
    <StyledCoinCardInfo>
      <NavLink to={`/graph/${coin.id}`} className="navlink">
        <Card className="card">
          <Title size={4} className="title">
            <span className="title-main">
              <img src={coin.image} alt={coin.name} />
              {coin.name}
              <Chip className={`chip chip-${priceChangeClass}`}>{priceChangePercentage}</Chip>
            </span>
            <span className="current-price">${price}</span>
          </Title>
          <Button onClick={removeCoin} className="remove">
            Remove
          </Button>
        </Card>
      </NavLink>
    </StyledCoinCardInfo>
  );
};

const StyledCoinCardInfo = styled.div`
  .navlink {
    text-decoration: none;
    .card {
      width: calc(300px - 40px);
      height: 100px;
      padding: 20px;
      margin: 0 20px 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-main {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            margin-right: 7px;
          }
          .chip {
            margin-left: 10px;
            padding: 2px 5px;
            font-weight: 400;
            font-size: 12px;
            color: #ffffff;
            &-green {
              background-color: #007d00;
            }
            &-red {
              background-color: #960000;
            }
          }
        }
      }
      .current-price {
        font-size: 12px;
        font-weight: 400;
      }
      .remove {
        padding: 5px 10px;
        width: min-content;
        align-self: flex-end;
      }
    }
  }
`;

export default CoinCardInfo;

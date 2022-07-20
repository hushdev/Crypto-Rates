import React from "react";
import styled from "styled-components";
import convertNumber from "../../../utils/convert-number";
import Card from "../../UI/Card";
import Chip from "../../UI/Chip";
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
        ${convertNumber(coin.market_data.current_price.usd)}
        <span className={priceChangeClass}>
          &nbsp;${convertNumber(coin.market_data.price_change_24h)} (24h)
        </span>
      </Title>
      <div className="info">
        {coin.description.en && (
          <Card className="card">
            <p dangerouslySetInnerHTML={{ __html: coin.description.en }}></p>
          </Card>
        )}

        <div className="chips">
          {/* Quick information */}
          <div className="additional-info">
            <span className="heading">Market Cap</span>
            <span className="value">
              ${convertNumber(coin.market_data.market_cap.usd)}
            </span>
          </div>
          <div className="additional-info">
            <span className="heading">Market Cap Rank</span>
            <span className="value">#{coin.market_cap_rank}</span>
          </div>
          <div className="additional-info">
            <span className="heading">All-time hight</span>
            <span className="value">
              ${convertNumber(coin.market_data.ath.usd)}
            </span>
          </div>
          <div className="additional-info">
            <span className="heading">All-time low</span>
            <span className="value">
              ${convertNumber(coin.market_data.atl.usd)}
            </span>
          </div>
          <div className="additional-info">
            <span className="heading">Total Volume</span>
            <span className="value">
              ${convertNumber(coin.market_data.total_volume.usd)}
            </span>
          </div>
          {/* Chip links to homepage, git and reddit */}
          <div className="chips-wrap">
            {coin.links.homepage[0] && (
              <Chip className="chip">
                <a
                  href={coin.links.homepage[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Chip>
            )}
            {coin.links.repos_url.github.length > 0 && (
              <Chip className="chip">
                <a
                  href={coin.links.repos_url.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Chip>
            )}
            {coin.links.repos_url.bitbucket.length > 0 && (
              <Chip className="chip">
                <a
                  href={coin.links.repos_url.bitbucket}
                  target="_blank"
                  rel="noreferrer"
                >
                  BitBucket
                </a>
              </Chip>
            )}
            {coin.links.subreddit_url && (
              <Chip className="chip">
                <a
                  href={coin.links.subreddit_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reddit
                </a>
              </Chip>
            )}
          </div>
        </div>
      </div>
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
  .info {
    display: flex;
    align-items: flex-start;

    .card {
      width: 60%;
      margin-right: 20px;
      p {
        height: 208px;
        overflow-y: scroll;
        padding-right: 10px;
      }
    }
    .chips {
      width: calc(40%);
      display: flex;
      flex-direction: column;
      .chips-wrap {
        display: flex;
        .chip {
          margin-right: 10px;
          margin-bottom: 10px;
          a {
            color: var(--blue);
            text-decoration: none;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }

      .additional-info {
        display: flex;
        justify-content: space-between;
        width: 300px;
        margin-bottom: 20px;
        .heading {
          color: var(--text-gray);
        }
        .value {
          color: var(--text-white);
        }
      }
    }
    @media (max-width: 760px) {
      flex-direction: column;
      .card {
        width: 100%;
        background: transparent;
        border: 0;
        padding: 0;
        overflow-x: hidden;
        border-radius: 0;
        margin-bottom: 20px;
      }
      p {
        max-width: 100%;
        width: 100%;
      }
      .additional-info {
        min-width: 100%;
      }
      .chips {
        width: 100%;

        .chips-wrap {
          margin-left: 0;
        }
      }
    }
  }
`;

export default Overview;

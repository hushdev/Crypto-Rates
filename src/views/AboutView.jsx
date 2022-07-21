import React from "react";
import styled from "styled-components";
import Title from "../components/UI/Title";

const AboutView = () => {
  return (
    <StyledAboutView>
      <Title size={2}>About</Title>
      <p>This is an app to fetch crypto data, view graphs, discover dashboard and read the blog.</p>
      <p>
        Frontend tech stack: React, react-query, react-router-dom, styled-components, sass (scss),
        react-transition-group
      </p>
      <p>
        API's:&nbsp;
        <a href="https://min-api.cryptocompare.com" target="_blank" rel="noreferrer">
          Cryptocompare,
        </a>
        &nbsp;
        <a href="https://www.coingecko.com" target="_blank" rel="noreferrer">
          Coin Gecko
        </a>
      </p>
      <p>
        Icons are coming from{" "}
        <a href="https://www.svgrepo.com" target="_blank" rel="noreferrer">
          SVG Repo
        </a>
      </p>
    </StyledAboutView>
  );
};

const StyledAboutView = styled.div`
  p {
    color: var(--text-white);
    font-size: 16px;
    margin-top: 15px;
    &:first-child {
      margin-top: 0;
    }
  }
  a {
    color: var(--blue);
  }
`;

export default AboutView;

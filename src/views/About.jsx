import React from "react";
import styled from "styled-components";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";

const About = () => {
  return (
    <StyledAbout>
      <Title size={2}>About</Title>
      <Card>
        <p>
        This in application to fetch an information about crypto, view graphs and dashboards.
        </p>
        <p>Frontend tech stack: React, Styled-components, React-router, React-query and SASS.</p>
        <p>API's:&nbsp;
          <a href="https://cryptopanic.com" target="_blank" rel="noreferrer">Cryptopanic (for news),</a>
          &nbsp;
          <a href="https://www.coingecko.com" target="_blank" rel="noreferrer">Coin Gecko (for everything else)</a>
        </p>
        <p>Icons are coming from <a href="https://www.svgrepo.com" target="_blank" rel="noreferrer">SVG Repo</a></p>
      </Card>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
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

export default About;

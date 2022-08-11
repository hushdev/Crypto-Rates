import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      Coded with ❤️ by&nbsp;
      <a href="https://github.com/hushdev" target="_blank" rel="noreferrer">
        Ildar Anikin
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  text-align: center;
  padding: 15px;
  color: var(--text-white);
  position: absolute;
  top: calc(100% - 46px);
  left: 50%;
  transform: translateX(-50%);
  & a {
    color: var(--text-white);
    text-decoration: none;
  }
`;

export default Footer;

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
  position: fixed;
  bottom: 10px;
  right: 15px;
  color: var(--text-white);
  font-size: 12px;
  & a {
    color: var(--text-white);
    text-decoration: none;
  }
`;

export default Footer;

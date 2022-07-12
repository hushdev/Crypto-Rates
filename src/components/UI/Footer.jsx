import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      Coded with ❤️ by{" "}
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
  color: #ffffff;
  font-size: 12px;
  & a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export default Footer;

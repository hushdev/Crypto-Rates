import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Row from "./Row";
import Button from "./Button";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <div className="logo">
            <NavLink to="/">Crypto Rates</NavLink>
          </div>
          <ul>
            <NavLink to="/">Rates</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <Button>
              <a
                className="github"
                href="https://github.com/hushdev/Crypto-Rates"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </ul>
        </Row>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  background-color: #0a1929;
  padding: 10px 0;
  border-bottom: 1px solid #173e68;
  margin-bottom: 20px;
  & .logo {
    color: #ffffff;
    font-size: 16px;
    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
  & ul a {
    font-size: 14px;
    margin-right: 10px;
    color: #6c6c6c;
    text-decoration: none;
  }
  & ul a.github {
    color: #ffffff;
    margin-right: 0;
  }
  & ul .active {
    color: #5090d3;
  }
`;

export default Navbar;

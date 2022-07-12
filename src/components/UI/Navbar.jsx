import React from "react";
import styled from "styled-components";

import ThemeToggler from "./ThemeToggler";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Row from "./Row";
import Button from "./Button";

import Logo from "../../assets/svg/logo.svg";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Row
          justifyContent="space-between"
          alignItems="center"
          padding="0 15px"
        >
          <div className="logo">
            <img src={Logo} alt="Crypto Rates Logo"/>
            <NavLink to="/">Crypto Rates</NavLink>
          </div>
          <ul>
            <NavLink to="/">Rates</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <ThemeToggler />
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
  background-color: var(--gray);
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-decor);
  margin-bottom: 20px;
  & .logo {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: auto;
      margin-right: 5px;
    }
    a {
      color: var(--text-white);
      text-decoration: none;
    }
  }
  & ul {
    display: flex;
    align-items: center;
  }
  & ul a {
    font-size: 14px;
    margin-right: 10px;
    color: var(--text-gray);
    text-decoration: none;
    font-weight: 400;
  }
  & ul a.github {
    color: #ffffff;
    margin-right: 0;
  }
  & ul .active {
    color: var(--text-white);
    font-weight: 500;
  }
`;

export default Navbar;

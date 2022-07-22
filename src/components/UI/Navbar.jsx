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
        <Row justifyContent="space-between" alignItems="center">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="Crypto Rates Logo" />
            <span>CryptoRates</span>
          </NavLink>
          <ul>
            <NavLink to="/">Coins</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <ThemeToggler className="nav-theme-toggler" />
            <Button className="github-btn">
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
  background-color: var(--gray-transparent);
  backdrop-filter: blur(5px);
  padding: 8px 15px;
  border-bottom: 1px solid var(--gray-decor);
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: var(--shadow);
  z-index: 100;
  @media (max-width: 555px) {
    padding: 10px 0;
  }
  & .logo {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 30px;
      height: auto;
      margin-right: 5px;
    }
    span {
      color: var(--text-white);
      @media (max-width: 555px) {
        display: none;
      }
    }
  }
  & ul {
    display: flex;
    align-items: center;
  }
  .nav-theme-toggler {
    @media (max-width: 450px) {
      margin-right: 0;
    }
  }
  & ul a {
    font-size: 14px;
    margin-right: 10px;
    @media (max-width: 330px) {
      margin-right: 5px;
    }
    color: var(--text-gray);
    text-decoration: none;
    font-weight: 400;
  }
  & ul .github-btn {
    padding: 5px 10px !important;
    @media (max-width: 450px) {
      display: none;
    }
  }
  & ul .github-btn a.github {
    color: #ffffff;
    margin-right: 0;
  }
  & ul .active {
    color: var(--text-white);
    font-weight: 500;
  }
`;

export default Navbar;

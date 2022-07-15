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
        >
          <div className="logo">
            <img src={Logo} alt="Crypto Rates Logo" />
            <NavLink to="/">CryptoRates</NavLink>
          </div>
          <ul>
            <NavLink to="/">Rates</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <ThemeToggler className="nav-theme-toggler"/>
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
  background-color: var(--gray);
  padding: 10px 15px;
  border-bottom: 1px solid var(--gray-decor);
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  @media (max-width:555px) {
    padding: 10px 0;
  }
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

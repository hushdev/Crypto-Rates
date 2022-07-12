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
        <Row justifyContent="space-between" alignItems="center" padding="0 15px">
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
  background-color: var(--gray);
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-decor);
  margin-bottom: 20px;
  & .logo {
    font-size: 16px;
    a {
      color: var(--text-white);
      text-decoration: none;
    }
  }
  & ul a {
    font-size: 14px;
    margin-right: 10px;
    color: var(--text-gray);
    text-decoration: none;
    font-weight: 400;
  }
  & ul a.github {
    color: var(--text-white);
    margin-right: 0;
  }
  & ul .active {
    color: var(--text-white);
    font-weight: 500;
  }
`;

export default Navbar;

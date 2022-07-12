import React from "react";
import styled from "styled-components";

const Card = ({ children, ...props }) => {
  return <StyledCard className={props.className}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  border: 1px solid rgb(30, 73, 118);
  border-radius: 10px;
  background-color: rgb(0, 30, 60);
  padding: 15px;
`;

export default Card;

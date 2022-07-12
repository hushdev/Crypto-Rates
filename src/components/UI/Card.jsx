import React from "react";
import styled from "styled-components";

const Card = ({ children, ...props }) => {
  return <StyledCard className={props.className}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  border: 1px solid var(--gray-decor);
  border-radius: 10px;
  background-color: var(--gray);
  padding: 15px;
`;

export default Card;

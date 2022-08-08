import React from "react";
import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return (
    <StyledButton className={props.className} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: var(--blue);
  padding: 10px 15px;
  color: #ffffff;
  border: 0;
  border-radius: 7px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: var(--blue-hover);
  }
`;

export default Button;

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
  background-color: rgb(0, 127, 255);
  padding: 10px 15px;
  color: #ffffff;
  font-weight: 600;
  border-radius: 10px;
`;

export default Button;

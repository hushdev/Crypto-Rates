import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, className, type, value, onChange, icon, ...props}) => {
  let iconUrl = null;
  if (icon) {
    iconUrl = require(`../../assets/svg/${icon}.svg`);
  }

  return (
    <StyledInputWrap>
      {icon && <img src={iconUrl} alt="Input icon" />}
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </StyledInputWrap>
  );
};

const StyledInputWrap = styled.div`
display: flex;
align-items: center;
  & input {
    padding: 10px;
    color: var(--text-white);
    background-color: transparent;
    border: 0;
    border-radius: 10px;
    &:focus {
      background-color: var(--gray-light);
    }
    &::placeholder {
      color: var(--text-gray);
    }
  }
  & img {
    width: 15px;
    height: auto;
    margin-right: 5px;
  }
`;

export default Input;

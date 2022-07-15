import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowSVG from '../../assets/svg/arrow.svg';

const GoBackBtn = () => {
  let navigate = useNavigate();
  
  return (
    <StyledGoBackBtn onClick={() => navigate(-1)}>
      <img src={ArrowSVG} alt="" /> Go Back
    </StyledGoBackBtn>
  )
}

const StyledGoBackBtn = styled.span`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--text-white); 
  font-size: 14px;
  
  & img {
    width: 40px;
    height: auto;
  }
`;

export default GoBackBtn;
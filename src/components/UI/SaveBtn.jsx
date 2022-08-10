import React from "react";
import styled from "styled-components";
import { ReactComponent as StarSVG } from "../../assets/svg/star.svg";

const SaveBtn = ({ onClick, active }) => {
  return (
    <StyledSaveBtn onClick={onClick} active={active}>
      <StarSVG />
    </StyledSaveBtn>
  );
};

const StyledSaveBtn = styled.div`
  svg {
    width: 13px;
    height: 13px;
    fill: ${(props) => (props.active ? "var(--blue)" : "var(--text-gray)")};
    transition: 0.2s ease;
    cursor: pointer;
    animation: ${(props) => (props.active ? "bounce 0.3s forwards" : "")};
    &:hover {
      fill: var(--blue-hover);
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default SaveBtn;

import React from "react";
import styled from "styled-components";

const Card = ({ children, ...props }) => {
  return (
    <StyledCard transparent={props.transparent} className={props.className} height={props.height} onScroll={props.onScroll} ref={props.innerRef}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid var(--gray-decor);
  border-radius: 10px;
  background-color: ${(props) => (props.transparent ? "transparent" : "var(--gray)")};
  padding: 15px;
  overflow-y: hidden;
  overflow-x: auto;
  box-shadow: var(--shadow);
  height: ${(props) => (props.height ? props.height : "auto")};

  @media (max-width:480px) {
    padding: 10px 10px;
  }
`;

export default Card;

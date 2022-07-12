import React from "react";
import styled from "styled-components";

const Row = ({children, ...props}) => {
  return (
    <StyledRow
      className={props.className}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export default Row;

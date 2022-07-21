import React from "react";
import styled from "styled-components";

const Row = ({ children, ...props }) => {
  return (
    <StyledRow
      className={props.className}
      flexWrap={props.flexWrap}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      padding={props.padding}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
`;

export default Row;

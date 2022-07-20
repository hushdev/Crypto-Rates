import React from "react";
import styled from "styled-components";

const Chip = ({children, className}) => {
  return (
    <StyledChip className={className}>{children}</StyledChip>
  );
}

const StyledChip = styled.div`
padding: 5px 10px;
background-color: var(--gray-decor);
color: var(--text-white);
width: min-content;
border-radius: 10px;
&:hover {
  background-color: var(--gray);
}
`;

export default Chip;
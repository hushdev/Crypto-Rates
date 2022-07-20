import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const CoinsSearch = ({onChange}) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    onChange(inputValue);   
  }
  
  return (
    <StyledCoinsSearch>
      <Input
        placeholder={"Type the name of currency"}
        value={inputValue}
        onChange={changeHandler}
        icon="search"
      />
    </StyledCoinsSearch>
  );
};

const StyledCoinsSearch = styled.div`
  margin-bottom: 30px;
`;

export default CoinsSearch;

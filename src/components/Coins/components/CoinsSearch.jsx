import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const CoinsSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value); 
    // api call here
  };

  return (
    <StyledCoinsSearch>
      <Input
        placeholder={"Search"}
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

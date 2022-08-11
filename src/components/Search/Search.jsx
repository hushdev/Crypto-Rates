import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";
import styled from "styled-components";
import { searchCoins } from "../../api/queries";
import Input from "../UI/Input";

const Search = ({ className }) => {
  const [searchText, setSearchText] = useState("");

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <StyledSearch className={className}>
      <Input
        placeholder="Coin name or ID"
        className=""
        type="text"
        value={searchText}
        onChange={searchHandler}
        icon="search"
      />
    
    </StyledSearch>
  );
};

const StyledSearch = styled.div``;

export default Search;

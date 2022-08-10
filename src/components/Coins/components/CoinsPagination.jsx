import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import Loader from "../../UI/Loader";

const CoinsPagination = ({ fetchPrev, fetchNext, page, isFetching }) => {
  return (
    <StyledCoinsPagination>
      <div className="pagination">
        <Button onClick={fetchPrev} disabled={isFetching}>
          {"<"}
        </Button>
        {isFetching && <Loader center className="loader"/> }
        <span className={`current-page ${isFetching && 'current-page-fetching'}`}>
          {page}
        </span>
        <Button onClick={fetchNext} disabled={isFetching}>
          {">"}
        </Button>
      </div>
    </StyledCoinsPagination>
  );
};

const StyledCoinsPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  span.current-page {
    margin: 0 10px;
    color: var(--text-white);
    font-size: 16px;
    font-weight: 500;
    &-fetching {
      color: transparent;
    }
  }
  button {
    padding: 5px 9.5px;
  }
  .loader {
    transform: scale(.5) translateX(-100%) translateY(-25%);
  }
`;

export default CoinsPagination;

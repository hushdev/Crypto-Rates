import React, { useState } from "react";
import { useQuery } from "react-query";
import { getRates } from "../api/queries";
import Coins from "../components/Coins/Coins";
import Loader from "../components/UI/Loader";
import ErrorMessage from "../components/UI/ErrorMessage";

const CoinsView = ({ baseUrl, ...props }) => {
  const [page, setPage] = useState(1);
  const { isLoading, data, error, refetch, isFetching, isPreviousData } = useQuery(["rates", page], () => getRates(page), {keepPreviousData: true});

  useState(() => {
    refetch();
  }, [page]);

  const nextHandler = () => {
    if (isPreviousData || data?.length === 0) return
    const newPage = page + 1;
    setPage(newPage);
  };

  const prevHandler = () => {
    const newPage = page - 1;
    setPage(newPage);
  };

  return (
    <div>
      {data && <Coins list={data} page={page} fetchNext={nextHandler} fetchPrev={prevHandler} isFetching={isFetching }/>}
      {isLoading && <Loader center />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default CoinsView;

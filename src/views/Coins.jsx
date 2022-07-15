import React from "react";
import { useQuery } from "react-query";
import { getRates } from "../api/queries";
import Title from "../components/UI/Title";
import Loader from "../components/UI/Loader";
import CoinsList from "../components/CoinsList/CoinsList";
import ErrorMessage from "../components/UI/ErrorMessage";

const Rates = ({ baseUrl, ...props }) => {
  const { status, data, error } = useQuery("rates", () => getRates(1));
  console.log(data);
  return (
    <div>
      <Title size={2}>Coins</Title>
      {status === "loading" && <Loader />}
      {data && <CoinsList list={data} />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default Rates;

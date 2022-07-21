import React from "react";
import { useQuery } from "react-query";
import { getRates } from "../api/queries";
import Coins from "../components/Coins/Coins";
import Title from "../components/UI/Title";
import Loader from "../components/UI/Loader";
import ErrorMessage from "../components/UI/ErrorMessage";

const CoinsView = ({ baseUrl, ...props }) => {
  const { status, data, error } = useQuery("rates", () => getRates(1));
  return (
    <div>
      <Title size={2}>Coins</Title>
      {data && <Coins list={data} />}
      {status === "loading" && <Loader />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default CoinsView;

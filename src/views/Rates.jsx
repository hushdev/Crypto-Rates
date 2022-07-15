import React from "react";
import { useQuery } from "react-query";
import { getRates } from "../api/queries";
import Title from "../components/UI/Title";
import Loader from "../components/UI/Loader";
import RatesList from "../components/Rates/RatesList";
import ErrorMessage from "../components/UI/ErrorMessage";

const Rates = ({ baseUrl, ...props }) => {
  const { status, data, error } = useQuery("rates", getRates);
  console.log(data);
  return (
    <>
      <Title size={3}>Rates</Title>

      {status === "loading" && <Loader />}  
      {data && <RatesList list={data} />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
};


export default Rates;

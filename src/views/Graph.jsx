import React from "react";
import GoBackBtn from "../components/UI/GoBackBtn";
import { useQuery } from "react-query";
import { getCoinInfo } from "../api/queries";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader";
import GraphInfo   from "../components/Graph";
import ErrorMessage from "../components/UI/ErrorMessage";

const Graph = () => {
  const coin = useParams().id;
  const { status, data, error } = useQuery("coinInfo", () => getCoinInfo(coin));

  return (
    <div>
      <GoBackBtn />
      {status === "loading" && <Loader />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && <GraphInfo coin={data} />}
    </div>
  );
};  

export default Graph;

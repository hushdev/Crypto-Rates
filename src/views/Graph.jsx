import React from "react";
import Card from "../components/UI/Card";
import GoBackBtn from "../components/UI/GoBackBtn";
import Title from "../components/UI/Title";

const Graph = () => {
  return (
    <div>
      <GoBackBtn />
      <Title size={2}>Graph</Title>
      <Card></Card>
    </div>
  );
};

export default Graph;

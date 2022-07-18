import React from "react";
// import { useQuery } from "react-query";
// import { getNews } from "../api/queries";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";

const Blog = () => {
  // const { status, data, error } = useQuery("news", () => getNews(1));
  // console.log(data);
  return (
    <div>
      <Title size={2}>Blog</Title>
      <Card></Card>
    </div>
  );
};

export default Blog;

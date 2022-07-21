import React from "react";
import { useQuery } from "react-query";
import { getNews } from "../api/queries";
import Blog from "../components/Blog/Blog";
import ErrorMessage from "../components/UI/ErrorMessage";
import Loader from "../components/UI/Loader";

const BlogView = () => {
  const { status, data, error } = useQuery("news", () => getNews(1));

  return (
    <div>
      {status === 'loading' && <Loader/>}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && <Blog posts={data.Data} />}
    </div>
  );
};

export default BlogView;

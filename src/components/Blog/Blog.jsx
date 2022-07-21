import React from "react";
import Title from "../UI/Title";
import Post from "./components/Post";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Title size={2}>Blog</Title>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};
export default Blog;

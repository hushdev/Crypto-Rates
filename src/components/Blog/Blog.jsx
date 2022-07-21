import React from "react";
import Row from "../UI/Row";
import Title from "../UI/Title";
import Post from "./components/Post";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Title size={2}>Blog</Title>
      <Row flexWrap="wrap" justifyContent="space-between">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Row>
    </>
  );
};
export default Blog;

import React from "react";
import Row from "../UI/Row";
import Title from "../UI/Title";
import Post from "./compondnts/Post";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Title size={2}>Blog</Title>
      <Row flexWrap="wrap" justifyContent="space-between">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </Row>
    </>
  );
};
export default Blog;

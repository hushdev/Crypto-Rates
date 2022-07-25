import React from "react";
import Row from "../UI/Row";
import Title from "../UI/Title";
import Post from "./compondnts/Post";

const Blog = ({ posts }) => {
  const lastPost = {
    title: "That is all for today ✅",
    body: "Check out the blog later...",
    lastPost: true,
  };

  return (
    <>
      <Title size={2}>Daily feed</Title>
      <Row flexWrap="wrap" justifyContent="flex-start" alignItems="stretch" margin="-10px 0 0 0">
        {posts?.length && posts.map((post, i) => <Post key={i} post={post} />)}
        <Post post={lastPost} />
      </Row>
    </>
  );
};
export default Blog;

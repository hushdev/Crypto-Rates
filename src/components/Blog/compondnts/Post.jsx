import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

const Post = ({ post }) => {
  return (
    <StyledPost>
      <Card className="post">{post.title}</Card>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  //TODO - Work on styling
  .post {
    width: 100%;
  }
`;

export default Post;

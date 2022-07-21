import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

const Post = ({ post }) => {
  console.log(post);
  return (
    <StyledPost>
      <Card>

      </Card>
    </StyledPost>    
  )
}


const StyledPost = styled.div`
`;

export default Post;
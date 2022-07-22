import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";
import Chip from "../../UI/Chip";
import Title from "../../UI/Title";

const Post = ({ post }) => {
  const categories = post.categories.split('|');

  return (
    <StyledPost>
      <Card className="post">
        <div className="info">
          {categories.map(category => <Chip className="info-chip">{category}</Chip>)}
        </div>
        <Title size={5} className="title">
          <img src={post.imageurl} alt={post.title} />
          {post.title.substr(0, 70)}
        </Title>
        <p dangerouslySetInnerHTML={{ __html: post.body }}></p>
        <a href={post.guid} target="_blank">
          Read more
        </a>
      </Card>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  margin: 10px;
  width: calc(33.3% - 20px);
  height: 100%;

  &:nth-child(4n) {
    width: calc(66.6% - 20px);
  }
  &:nth-child(6n) {
    width: calc(100% - 20px);
  }

  @media (max-width: 730px) {
    width: calc(50% - 20px);

    &:nth-child(4n) {
      width: calc(50% - 20px);
    }
    &:nth-child(6n) {
      width: calc(50% - 20px);
    }
    &:nth-child(7n-4) {
      width: calc(100% - 20px);
    }
  }

  @media (max-width: 430px) {
    width: 100%;
    &:nth-child(4n),
    &:nth-child(6n) {
      width: 100%;
    }
  }

  .post {
    min-height: 196px;
    height: 100%;
    height: max-content;
    overflow: hidden;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    .info {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &-chip {
        margin-right: 5px;
        font-size: 12px;
        &:last-child {margin-right: 0;}
      }
    }
    .title {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;

        @media (max-width: 730px) {
          display: none;
        }
        @media (max-width: 430px) {
          display: block;
        }
      }
    }
    p {
      color: var(--text-gray);
      margin-bottom: 20px;
      font-size: 14px;
      height: 50px;
      overflow: hidden;
    }

    a {
      color: var(--blue);
      font-size: 14px;
      text-decoration: none;
      margin-left: auto;
      margin-top: auto;
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: var(--text-gray);
      }
    }

    &:hover {
      transform: scale(0.98);
      filter: brightness(90%);
    }
  }
`;

export default Post;
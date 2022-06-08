import React from "react";
import { Comments } from "../../components/Comments/Comments";
import { ShowPost } from "../../components/ShowPost/ShowPost";
import "./PostPage.scss";
import { CreateComment } from "../../components/CreateComment/CreateComment";

export const PostPage: React.FC = () => {
  return (
    <div className="post-page">
      <ShowPost />
      <CreateComment />
      <Comments />
    </div>
  );
};

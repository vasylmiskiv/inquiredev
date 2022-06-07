import React from "react";
import { Posts } from "../../components/Posts/Posts";
import { CreatePost } from "../../components/CreatePost/CreatePost";

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Posts</h1>
      <CreatePost />
      <Posts />
    </>
  );
};

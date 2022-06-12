import React from "react";
import { Posts } from "../../components/Posts/Posts";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Container } from "@mui/system";
import "./HomePage.scss";


export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Container maxWidth="md">
        <CreatePost />
        <Posts />
      </Container>
    </div>
  );
};

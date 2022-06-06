import { useState, useEffect } from "react";
import { Typography, Button, CardContent, Card } from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Comments from "../../components/Comments/Comments";
import ShowPost from "../../components/ShowPost/ShowPost";
import "./PostPage.scss";
import CreateComment from "../../components/CreateComment/CreateComment";

const PostPage = () => {

  const { id } = useParams();

  return (
    <>
      <h1>Show post</h1>
      <ShowPost />
      <CreateComment />
      <h3>Comments:</h3>
      <Comments />
    </>
  );
};

export default PostPage;

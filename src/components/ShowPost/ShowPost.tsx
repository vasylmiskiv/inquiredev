import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import Loader from "../Loader/Loader";
import "./ShowPost.scss";

const ShowPost = () => {
  const { currentPost } = useSelector((state: initialState) => state);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPostById(id));
  }, []);

  return (
    <div className="show-section">
      <Button
        variant="outlined"
        className="show-section-goback"
        onClick={() => navigate("/")}
      >
        Go back
      </Button>
      <Card className="show-section-post">
        <CardContent>
            <Typography sx={{ fontSize: 12, marginTop: '10px' }} color="text.secondary" gutterBottom>
              Post ID: {id}
            </Typography>
            <Typography variant="h5">{currentPost.title}</Typography>
            <Typography variant="body2">{currentPost.body}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowPost;

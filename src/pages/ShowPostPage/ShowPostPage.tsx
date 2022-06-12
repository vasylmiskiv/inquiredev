import React, { useEffect, useState } from "react";
import { Comments } from "../../components/Comments/Comments";
import { CreateComment } from "../../components/CreateComment/CreateComment";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import "./ShowPostPage.scss";
import { useParams, useNavigate } from "react-router-dom";

export const ShowPostPage: React.FC = () => {
  const [currentPost, setCurrentPost] = useState<Post | any>({
    title: "",
    body: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, body, timestamp, image } = currentPost;

  useEffect(() => {
    setCurrentPost(
      JSON.parse(window.localStorage.posts).find(
        (post: Post) => post.id.toString() === id
      )
    );
  }, [id]);

  return (
    <div
      className="post-page"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <Container maxWidth="md">
        <Button
          variant="contained"
          className="goback-button"
          onClick={() => navigate("/")}
        >
          Go back
        </Button>
        <Card className="show-content" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
          <CardContent>
            <Typography
              sx={{ fontSize: 12, marginTop: "10px" }}
              color="text.secondary"
              gutterBottom
            >
              Post ID: {id}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              {title}
            </Typography>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              Published at: {timestamp}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "20px" }}>
              {body}
            </Typography>
          </CardContent>
        </Card>
        <CreateComment />
        <Comments />
      </Container>
    </div>
  );
};

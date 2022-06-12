import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import "./ShowPost.scss";

export const ShowPost: React.FC = () => {
  const [currentPost, setCurrentPost] = useState<Post | any>({
    title: "",
    body: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, body } = currentPost;

  useEffect(() => {
    setCurrentPost(
      JSON.parse(window.localStorage.posts).find(
        (post: Post) => post.id.toString() === id
      )
    );
  }, [id]);

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
          <Typography
            sx={{ fontSize: 12, marginTop: "10px" }}
            color="text.secondary"
            gutterBottom
          >
            Post ID: {id}
          </Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

import { CardContent, Typography, CardActions, Button, Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import { dispatchStore } from "../../redux/store";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { PostsActionsCreator } from "../../redux/actions";
import './PostPage.scss';

const PostPage = ({ currentPost, loading }: any) => {
  const [showPost, setShowPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPostById(id));
  }, [id]);

  useEffect(() => {
    setShowPost(currentPost)
    setIsLoading(loading)
  }, [currentPost, loading])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="show-section">
            <Button
            variant="outlined"
            className="show-section-goback"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
           <Card variant="outlined" className="show-post">
          <CardContent>
            <Typography variant="h5" component="div">
              {currentPost.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {currentPost.timestamp}
            </Typography>
            <Typography variant="body2">
              {currentPost.body}
            </Typography>
          </CardContent>
          <Card className="show-comments" variant="outlined">
            123
          </Card>
          </Card>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: initialState) => {
  return {
    currentPost: state.currentPost,
    loading: state.isLoading,
  };
};

export default connect(mapStateToProps, null)(PostPage);

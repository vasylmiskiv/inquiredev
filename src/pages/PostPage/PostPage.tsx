import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  CardContent,
  Card,
} from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Comments from "../../components/Comments/Comments";
import CreateComment from "../../components/CreateComment/CreateComment";
import "./PostPage.scss";

const PostPage = () => {
  const [showPost, setShowPost] = useState({
    title: "",
    body: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const { currentPost, isLoading } = useSelector(
    (state: initialState) => state
  );

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPostById(id));
    dispatchStore(PostsActionsCreator.fetchComments(id));
  }, []);

  useEffect(() => {
    setShowPost(currentPost);
  }, [currentPost]);

  return (
    <div className="show-section">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Button
            variant="outlined"
            className="show-section-goback"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
          <Card className="show-section-post">
            <CardContent>
              <Typography variant="h4">Post</Typography>
              <Card>
                <CardContent>
                  <Typography variant="h5">{showPost.title}</Typography>
                  <Typography variant="body2">{showPost.body}</Typography>
                </CardContent>
              </Card>
            </CardContent>
            <Card className="show-section-comments">
              <CardContent>
                <Typography variant="h5">Comments:</Typography>
                <Comments />
              </CardContent>
            </Card>
          </Card>
          <CreateComment />
        </div>
      )}
    </div>
  );
};

export default PostPage;

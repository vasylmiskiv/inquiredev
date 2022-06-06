import { Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "./EditForm.scss";
import Loader from "../../components/Loader/Loader";

const EditPostPage = ({ currenPost, loading }: any) => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPostById(id));
  }, [id]);

  useEffect(() => {
    setEditTitle(currenPost.title);
    setEditBody(currenPost.body);
  }, [currenPost]);

  const onEditPost = (e: any) => {
    e.preventDefault();
    const editedPost = {
      ...currenPost,
      title: editTitle,
      body: editBody,
    };
    dispatchStore(PostsActionsCreator.editPost(editedPost, currenPost.id));
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="edit-section">
          <Button
            variant="outlined"
            className="edit-section-goback"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
          <form className="edit-form" onSubmit={(e) => onEditPost(e)}>
            <TextField
              id="outlined-basic"
              label="Edit title"
              variant="outlined"
              value={editTitle}
              onChange={(e: any) => setEditTitle(e.target.value)}
            />
            <TextField
              label="Edit post"
              multiline
              rows={4}
              variant="outlined"
              value={editBody}
              onChange={(e: any) => setEditBody(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Edit a post
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: initialState) => {
  return {
    currenPost: state.currentPost,
    loading: state.isLoading,
  };
};

export default connect(mapStateToProps, null)(EditPostPage);

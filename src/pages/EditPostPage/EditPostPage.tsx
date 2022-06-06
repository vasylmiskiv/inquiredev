import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import "./EditForm.scss";

const EditPostPage = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const {currentPost, isLoading} = useSelector((state: initialState) => state)

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPostById(id));
  }, [id]);

  useEffect(() => {
    setEditTitle(currentPost.title);
    setEditBody(currentPost.body);
  }, [currentPost]);

  const onEditPost = (e: React.FormEvent) => {
    e.preventDefault();
    
    const editedPost = {
      ...currentPost,
      title: editTitle,
      body: editBody,
    };
    dispatchStore(PostsActionsCreator.editPost(editedPost, currentPost.id));
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTitle(e.target.value)}
            />
            <TextField
              label="Edit post"
              multiline
              rows={4}
              variant="outlined"
              value={editBody}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditBody(e.target.value)}
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



export default EditPostPage;

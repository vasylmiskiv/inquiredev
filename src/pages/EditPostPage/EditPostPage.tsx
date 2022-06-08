import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import "./EditPostPage.scss";

export const EditPostPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [textLimit, setTextLimit] = useState({ title: 3, body: 5 });
  const [invalidForm, setInvalidForm] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const { currentPost, isLoading } = useSelector(
    (state: initialState) => state
  );

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPostById(id));
  }, [id]);

  useEffect(() => {
    setTitle(currentPost.title);
    setBody(currentPost.body);
  }, [currentPost]);

  const isInputInvalid = (input: string, textLimit: number) => {
    return input.length < textLimit;
  };

  const onEditPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      isInputInvalid(title, textLimit.title) ||
      isInputInvalid(body, textLimit.body)
    ) {
      setInvalidForm(true);
    } else {
      const editedPost = {
        ...currentPost,
        title,
        body,
      };

      dispatchStore(PostsActionsCreator.editPost(editedPost, currentPost.id));
      dispatchStore(PostsActionsCreator.fetchPosts());
      navigate("/");
    }
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
              error={invalidForm && isInputInvalid(title, textLimit.title)}
              id="outlined-basic"
              label="Edit title"
              variant="outlined"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              helperText={
                invalidForm &&
                isInputInvalid(title, textLimit.title) &&
                `At least ${textLimit.title} characters`
              }
            />
            <TextField
              error={invalidForm && isInputInvalid(body, textLimit.body)}
              label="Edit post"
              multiline
              rows={10}
              variant="outlined"
              value={body}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBody(e.target.value)
              }
              helperText={
                invalidForm &&
                isInputInvalid(body, textLimit.body) &&
                `At least ${textLimit.body} characters`
              }
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

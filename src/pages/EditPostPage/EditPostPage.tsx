import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import "./EditPostPage.scss";

export const EditPostPage: React.FC = () => {
  const [currentPost, setCurrentPost] = useState<Post | any>({
    title: "",
    body: "",
  });
  const [textLimit, _setTextLimit] = useState<textLimit>({ title: 3, body: 5 });
  const [invalidForm, setInvalidForm] = useState<boolean>(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, body, image } = currentPost;

  useEffect(() => {
    setCurrentPost(
      JSON.parse(window.localStorage.posts).find(
        (post: Post) => post.id.toString() === id
      )
    );
  }, [id]);

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
      dispatchStore(PostsActionsCreator.editPost(currentPost, currentPost.id));
      navigate("/");
    }
  };

  return (
    <div
      className="edit-section"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="md">
        <Button
          variant="contained"
          className="edit-section-goback"
          onClick={() => navigate("/")}
        >
          Go back
        </Button>

        <Card
          sx={{ minWidth: 275 }}
          className="edit-content"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
          <CardContent>
            <form className="edit-form" onSubmit={(e) => onEditPost(e)}>
              <TextField
                error={invalidForm && isInputInvalid(title, textLimit.title)}
                id="outlined-basic"
                label="Edit title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrentPost({ ...currentPost, title: e.target.value })
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
                value={body}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrentPost({ ...currentPost, body: e.target.value })
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
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

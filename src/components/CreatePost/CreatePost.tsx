import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { dispatchStore } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import { PostsActionsCreator } from "../../redux/actions";
import moment from "moment";
import { useSelector } from "react-redux";
import "./CreatePost.scss";

export const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [textLimit, _setTextLimit] = useState <textLimit>({ title: 8, body: 12 });
  const [invalidForm, setInvalidForm] = useState<boolean>(false);

  const isInvalidInput = (inputLength: number, textLimit: number) => {
    return inputLength < textLimit;
  };

  const { randomImage } = useSelector((state: initialState) => state);

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchRandomImage());
  }, []);

  const createPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      isInvalidInput(title.length, textLimit.title) ||
      isInvalidInput(body.length, textLimit.body)
    ) {
      setInvalidForm(true);
    } else {
      const newPost: Post = {
        id: uuidv4(),
        title,
        body,
        image: randomImage,
        timestamp: moment().format("lll"),
      };

      setInvalidForm(false);
      dispatchStore(PostsActionsCreator.addNewPost(newPost));
      dispatchStore(PostsActionsCreator.fetchRandomImage());
      setTitle("");
      setBody("");
    }
  };

  return (
    <form className="post-form" onSubmit={(e) => createPost(e)}>
      <TextField
        error={invalidForm && isInvalidInput(title.length, textLimit.title)}
        id="outlined-basic"
        label="Post title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        helperText={
          invalidForm &&
          isInvalidInput(title.length, textLimit.title) &&
          `At least ${textLimit.title} characters`
        }
      />
      <TextField
        error={invalidForm && isInvalidInput(body.length, textLimit.body)}
        label="Write something..."
        multiline
        rows={5}
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        helperText={
          invalidForm &&
          isInvalidInput(body.length, textLimit.body) &&
          `At least ${textLimit.body} characters`
        }
      />
      <Button variant="contained" color="success" type="submit" size="large">
        Create a post
      </Button>
    </form>
  );
};

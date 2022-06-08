import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { dispatchStore } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import { PostsActionsCreator } from "../../redux/actions";
import moment from "moment";
import "./CreatePost.scss";

export const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [textLimit, setTextLimit] = useState({ title: 8, body: 12 });
  const [invalidForm, setInvalidForm] = useState(false);

  const isInvalidInput = (inputLength: number, textLimit: number) => {
    return inputLength < textLimit;
  };

  const createPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      isInvalidInput(title.length, textLimit.title) ||
      isInvalidInput(body.length, textLimit.body)
    ) {
      setInvalidForm(true);
    } else {
      const newPost = {
        id: uuidv4(),
        title,
        body,
        timestamp: moment().format("lll"),
      };

      setInvalidForm(false);
      dispatchStore(PostsActionsCreator.addNewPost(newPost));
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
      <Button variant="contained" color="success" type="submit">
        Create a post
      </Button>
    </form>
  );
};

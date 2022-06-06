import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./CreatePost.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dispatchStore } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import { PostsActionsCreator } from "../../redux/actions";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      body,
      comments: [],
      timestamp: new Date(),
    };

    dispatchStore(PostsActionsCreator.addNewPost(newPost));
    setTitle("");
    setBody("");
  };

  return (
    <form className="post-form" onSubmit={(e) => createPost(e)}>
      <TextField
        id="outlined-basic"
        label="Post title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Write something..."
        multiline
        rows={4}
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button variant="contained" color="success" type="submit">
        Create a post
      </Button>
    </form>
  );
};

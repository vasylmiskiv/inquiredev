import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "./CreateComment.scss";

export const CreateComment: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [textLimit, setTextLimit] = useState({ comment: 8 });
  const [invalidForm, setInvalidForm] = useState(false);

  const isInvalidInput = (inputLength: number, textLimit: number) => {
    return inputLength < textLimit;
  };

  const { id } = useParams();

  const onSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (isInvalidInput(comment.length, textLimit.comment)) {
      setInvalidForm(true);
    } else {
      const newComment: CommentItem = {
        id: uuidv4(),
        userName,
        postId: id,
        body: comment,
        timestamp: moment().format("lll"),
      };

      setInvalidForm(false);
      dispatchStore(PostsActionsCreator.addNewComment(newComment));
      setUserName("");
      setComment("");
    }
  };

  return (
    <form className="comment-form" onSubmit={(e) => onSubmitComment(e)}>
      <TextField
        id="outlined-basic"
        label="Your name"
        variant="outlined"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        helperText={`Enter your name otherwise the comment will be created anonymously`}
      />
      <TextField
        error={invalidForm && isInvalidInput(comment.length, textLimit.comment)}
        label="Write a comment..."
        multiline
        rows={4}
        variant="outlined"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        helperText={
          invalidForm &&
          isInvalidInput(comment.length, textLimit.comment) &&
          `At least ${textLimit.comment} characters`
        }
      />
      <Button variant="contained" color="success" type="submit">
        Send a comment
      </Button>
    </form>
  );
};

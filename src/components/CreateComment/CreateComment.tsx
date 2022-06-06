import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import "./CreateComment.scss";
import { useSelector } from "react-redux";

const CreateComment = () => {
  const [commentBody, commentSetBody] = useState("");

  const { id } = useParams();

  const { comments, isLoading } = useSelector((state: initialState) => state);

  const onSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: CommentItem = {
      id: uuidv4(),
      postId: id,
      body: commentBody,
      timestamp: new Date(),
    };
    dispatchStore(PostsActionsCreator.addNewComment(newComment));
  };

  return (
    <form className="comment-form" onSubmit={(e) => onSubmitComment(e)}>
      <TextField
        label="Write a comment..."
        multiline
        rows={4}
        variant="outlined"
        value={commentBody}
        onChange={(e) => commentSetBody(e.target.value)}
      />
      <Button variant="contained" color="success" type="submit">
        Send a comment
      </Button>
    </form>
  );
};

export default CreateComment;

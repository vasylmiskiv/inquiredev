import { TextField, Button } from "@mui/material";
import { useState } from "react";
import './CreateComment.scss';

const CreateComment = () => {
  const [commentTitle, commentSetTitle] = useState('');
  const [commentBody, commentSetBody] = useState('');

  return (
    <form className="comment-form">
      <TextField
        label="Write a comment..."
        multiline
        rows={4}
        variant="outlined"
      />
      <Button variant="contained" color="success" type="submit">
        Send a comment
      </Button>
    </form>
  );
};

export default CreateComment;

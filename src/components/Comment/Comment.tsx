import Card from "@mui/material/Card";
import "./Comment.scss";
import { FC } from 'react';

type Props = {
  comment: CommentItem
}

export const Comment: FC<Props> = ({ comment }) => {
  return (
    <Card className="comment" variant="outlined">
      {comment.body}
    </Card>
  );
};

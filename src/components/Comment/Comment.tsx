import Card from "@mui/material/Card";
import "./Comment.scss";

export const Comment = ({ comment }: any) => {
  return <Card className="comment" variant="outlined">{comment.body}</Card>;
};

import Card from "@mui/material/Card";
import "./Comment.scss";
import { FC } from "react";
import { CardContent, Typography } from "@mui/material";

type Props = {
  comment: CommentItem;
};

export const Comment: FC<Props> = ({ comment }) => {
  return (
    <>
      <Card className="comment" variant="outlined">
        <CardContent>
          <Typography
            sx={{ fontSize: 12, marginTop: "10px" }}
            color="text.secondary"
            gutterBottom
          >
            <div>
              {comment.timestamp &&
                comment.timestamp.toLocaleString("en-GB", { timeZone: "UTC" })}
            </div>
          </Typography>
          <Typography variant="h5" component="div">
            {comment.body}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

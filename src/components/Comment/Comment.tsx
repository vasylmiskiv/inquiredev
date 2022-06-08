import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import "./Comment.scss";

type Props = {
  comment: CommentItem;
};

export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <>
      <Card className="comment" variant="outlined">
        <CardContent>
          <Typography component="div" sx={{ fontSize: 20 }}>
            {comment.userName && comment.userName.length
              ? comment.userName
              : "Anonymous"}
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {comment.timestamp && (
              <div>
                {comment.timestamp.toLocaleString("en-GB", {
                  timeZone: "UTC",
                })}
              </div>
            )}
          </Typography>
          <Typography component="div" sx={{ marginTop: 2 }}>
            {comment.body}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

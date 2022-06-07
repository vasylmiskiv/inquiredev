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
          <Typography
            sx={{ fontSize: 12, marginTop: "10px" }}
            color="text.secondary"
            gutterBottom
          >
            <div>
              {comment.timestamp && (
                <div>
                  {comment.timestamp.toLocaleString("en-GB", {
                    timeZone: "UTC",
                  })}
                </div>
              )}
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

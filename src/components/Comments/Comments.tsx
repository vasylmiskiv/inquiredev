import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { Comment } from "../Comment/Comment";
import { Loader } from "../Loader/Loader";
import "./Comments.scss";

export const Comments: React.FC = () => {
  const { comments, isLoading } = useSelector((state: initialState) => state);

  const { id } = useParams();

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchComments(id));
  }, [id]);

  return (
    <>
      <Card
        className="comments-content"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
            Comments: {comments ? comments.length : 0}
          </Typography>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="comments">
              {comments.length ? (
                <ul className="comments-list">
                  {comments.map((comment: CommentItem) => (
                    <li key={comment.id} className="comments-item">
                      <Comment comment={comment} />
                    </li>
                  ))}
                </ul>
              ) : (
                <h4 className="comments-empty">Comments list is empty</h4>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Comments;

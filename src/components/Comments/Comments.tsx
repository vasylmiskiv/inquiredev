import { useEffect, useState } from "react";
import { dispatchStore } from "../../redux/store";
import { useSelector } from "react-redux";
import { PostsActionsCreator } from "../../redux/actions";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import { Comment } from "../Comment/Comment";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import "./Comments.scss";

const Comments: React.FC = () => {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const { comments, isLoading } = useSelector((state: initialState) => state);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  return (
    <div className="comments">
      {commentList.length ? (
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comments-item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h4 className="comments-empty">Comments list is empty</h4>
      )}
    </div>
  );
};

export default Comments;

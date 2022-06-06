import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Comment } from "../Comment/Comment";
import "./Comments.scss";

const Comments: React.FC = () => {
  const [commentList, setCommentList] = useState<CommentItem[]>([]);

  const { comments, isLoading } = useSelector((state: initialState) => state);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  return (
    <div className="comments">
      {commentList.length ? (
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
  );
};

export default Comments;

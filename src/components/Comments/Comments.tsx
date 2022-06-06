import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostsActionsCreator } from "../../redux/actions";
import { dispatchStore } from "../../redux/store";
import { Comment } from "../Comment/Comment";
import Loader from '../Loader/Loader';
import "./Comments.scss";

const Comments: React.FC = () => {
  const [commentList, setCommentList] = useState<CommentItem[]>([]);

  const { comments, isLoading } = useSelector((state: initialState) => state);

  const { id } = useParams();

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchComments(id));
  }, [])

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="comments">
          <h3>Comments:</h3>
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
      )}
    </>
  );
};

export default Comments;

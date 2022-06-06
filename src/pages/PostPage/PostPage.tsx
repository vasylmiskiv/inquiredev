import Comments from "../../components/Comments/Comments";
import ShowPost from "../../components/ShowPost/ShowPost";
import "./PostPage.scss";
import CreateComment from "../../components/CreateComment/CreateComment";

const PostPage = () => {

  return (
    <>
      <h1>Show post</h1>
      <ShowPost />
      <CreateComment />
      <h3>Comments:</h3>
      <Comments />
    </>
  );
};

export default PostPage;

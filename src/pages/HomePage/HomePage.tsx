import  Posts  from "../../components/Posts/Posts";
import { CreatePost } from "../../components/CreatePost/CreatePost";

export const HomePage = () => {

  return (
    <>
      <h1>Posts</h1>
      <CreatePost />
      <Posts />
    </>
  );
}


import  Posts  from "../../components/Posts/Posts";
import { CreatePost } from "../../components/CreatePost/CreatePost";

export const HomePage = () => {

  return (
    <>
      <CreatePost />
      <Posts />
    </>
  );
}


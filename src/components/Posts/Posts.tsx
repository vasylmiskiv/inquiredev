import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { PostCard } from "../PostCard/PostCard";
import Loader from "../Loader/Loader";
import "./Posts.scss";
import { PostsActionsCreator } from "../../redux/actions/index";
import { dispatchStore } from "../../redux/store";

type Props = {
  posts: Post[];
  fetchPostsData: () => void;
  loading: boolean;
};

const Posts: FC<Props> = React.memo(({ posts, loading }: any) => {
  const [postsList, setPostsList] = useState<any[]>([]);

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPosts());
  }, []);

  useEffect(() => {
    console.log(posts)
    setPostsList(posts)
    setPostsList(posts => posts.sort())
    console.log(posts)
  }, [posts])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ul className="list">
            {postsList.map((post: Post) => (
              <li className="list-item" key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
});

const mapStateToProps = (state: initialState) => {
  return {
    posts: state.posts,
    loading: state.isLoading,
  };
};

export default connect(mapStateToProps, null)(Posts);

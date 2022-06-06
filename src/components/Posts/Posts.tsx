import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { PostCard } from "../PostCard/PostCard";
import Loader from "../Loader/Loader";
import "./Posts.scss";
import { PostsActionsCreator } from "../../redux/actions/index";
import { dispatchStore } from "../../redux/store";

const Posts: FC = React.memo(({ posts, loading }: any) => {
  const [postsList, setPostsList] = useState<any[]>([]);

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPosts());
  }, []);

  useEffect(() => {
    setPostsList(posts);
  }, [posts]);

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

import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { PostCard } from "../PostCard/PostCard";
import Loader from "../Loader/Loader";
import { PostsActionsCreator } from "../../redux/actions/index";
import { dispatchStore } from "../../redux/store";
import { useSelector } from "react-redux";
import "./Posts.scss";

const Posts = React.memo(() => {
  const [postsList, setPostsList] = useState<Post[]>([]);

  const { posts, isLoading } = useSelector((state: initialState) => state);

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPosts());
  }, []);

  useEffect(() => {
    setPostsList(posts);
  }, [posts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {postsList.length ? (
            <ul className="list">
              {postsList.map((post: Post) => (
                <li className="list-item" key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="list-empty">List is empty</h2>
          )}
        </>
      )}
    </>
  );
});

export default Posts;

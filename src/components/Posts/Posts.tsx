import React, { useEffect, useState } from "react";
import { Post } from "../PostCard/Post";
import { Loader } from "../Loader/Loader";
import { PostsActionsCreator } from "../../redux/actions/index";
import { dispatchStore } from "../../redux/store";
import { useSelector } from "react-redux";
import "./Posts.scss";

export const Posts: React.FC = React.memo(() => {
  const { posts, isLoading } = useSelector((state: initialState) => state);

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPosts());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {posts.length ? (
            <ul className="list">
              {posts.map((post: Post) => (
                <li className="list-item" key={post.id}>
                  <Post post={post} />
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

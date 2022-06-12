import React, { useEffect, useState } from "react";
import { Post } from "../PostCard/Post";
import { Loader } from "../Loader/Loader";
import { PostsActionsCreator } from "../../redux/actions/index";
import { dispatchStore } from "../../redux/store";
import { useSelector } from "react-redux";
import "./Posts.scss";
import { Button } from "@mui/material";

export const Posts: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [lastItem, setLastItem] = useState<number>(5);

  const { posts, isLoading } = useSelector((state: initialState) => state);

  useEffect(() => {
    dispatchStore(PostsActionsCreator.fetchPosts());
  }, []);

  useEffect(() => {
    setVisiblePosts(posts.slice(0, lastItem));
  }, [posts, lastItem]);

  const getMorePosts = () => {
    setLastItem(lastItem + 3);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {posts.length ? (
            <ul className="list">
              {visiblePosts.map((post: Post) => (
                <li className="list-item" key={post.id}>
                  <Post post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <h4 className="list-empty">List is empty</h4>
          )}
          {visiblePosts.length !== posts.length && (
            <Button
              sx={{ width: "100%" }}
              size="large"
              onClick={() => getMorePosts()}
            >
              Get more posts
            </Button>
          )}
        </>
      )}
    </>
  );
};

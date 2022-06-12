import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  POST_NEW_POST_FAILED,
  POST_NEW_POST_SUCCESS,
  POST_NEW_POST_REQUEST,
  DELETE_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  PUT_POST_FAILED,
  PUT_POST_REQUEST,
  PUT_POST_SUCCESS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  POST_NEW_COMMENT_FAILED,
  POST_NEW_COMMENT_REQUEST,
  POST_NEW_COMMENT_SUCCESS,
  GET_RANDOM_IMG_FAILED,
  GET_RANDOM_IMG_REQUEST,
  GET_RANDOM_IMG_SUCCESS,
} from "./types";
import { Dispatch } from "redux";
import { API } from "../../helper/api";

export const PostsActionsCreator = {
  fetchPosts() {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.getPostsRequest());
        const response = await API.getPosts();
        window.localStorage.setItem("posts", JSON.stringify(response));
        dispatch(PostsActionsCreator.getPostsSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.getPostsFailed(error));
      }
    };
  },
  addNewPost(newPost: Post) {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.postNewPostRequest());
        const response = await API.postNewPost(newPost);
        const posts = [...JSON.parse(window.localStorage.posts), response];
        window.localStorage.setItem("posts", JSON.stringify(posts));
        dispatch(PostsActionsCreator.postNewPostSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.postNewPostFailed(error));
      }
    };
  },
  editPost(editedPost: Post, id: string | number) {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.putPostRequest());
        const response = await API.putEditedPost(editedPost, id);
        dispatch(PostsActionsCreator.putPostSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.postNewPostFailed(error));
      }
    };
  },
  deletePost(postId: number | string) {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.deleteCurrentPostRequest());
        await API.deleteCurrentPost(postId);
        dispatch(PostsActionsCreator.deleteCurrentPostSuccess(postId));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.deleteCurrentPostFailed(error));
      }
    };
  },
  fetchComments(postId: number | string | undefined) {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.getCommentsByPostIdRequest());
        const response = await API.getCommentsByPostId(postId);
        dispatch(
          PostsActionsCreator.getCommentsByPostIdSuccess(response.comments)
        );
      } catch (error) {
        dispatch(PostsActionsCreator.getCommentsByPostIdFailed());
      }
    };
  },
  addNewComment(newComment: CommentItem) {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.postNewCommentRequest());
        const response = await API.postNewComment(newComment);
        dispatch(PostsActionsCreator.postNewCommentSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.postNewPostFailed(error));
      }
    };
  },
  fetchRandomImage() {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(PostsActionsCreator.getRandomImageRequest());
        const response = await API.getRandomImage();
        dispatch(PostsActionsCreator.getRandomImageSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.postNewPostFailed(error));
      }
    };
  },

  getPostsRequest: () => ({ type: GET_POSTS_REQUEST }),
  getPostsSuccess: (response: Post[]) => ({
    type: GET_POSTS_SUCCESS,
    payload: response,
  }),
  getPostsFailed: (error: string) => ({
    type: GET_POSTS_FAILED,
    payload: error,
  }),

  postNewPostRequest: () => ({ type: POST_NEW_POST_REQUEST }),
  postNewPostSuccess: (newPost: Post) => ({
    type: POST_NEW_POST_SUCCESS,
    payload: newPost,
  }),
  postNewPostFailed: (error: string) => ({
    type: POST_NEW_POST_FAILED,
    payload: error,
  }),

  putPostRequest: () => ({ type: PUT_POST_REQUEST }),
  putPostSuccess: (editedPost: Post) => ({
    type: PUT_POST_SUCCESS,
    payload: editedPost,
  }),
  putPostFailed: (error: string) => ({ type: PUT_POST_FAILED, payload: error }),

  deleteCurrentPostRequest: () => ({ type: DELETE_POST_REQUEST }),
  deleteCurrentPostSuccess: (postId: number | string | undefined) => ({
    type: DELETE_POST_SUCCESS,
    payload: postId,
  }),
  deleteCurrentPostFailed: (error: string) => ({
    type: DELETE_POST_FAILED,
    payload: error,
  }),

  getCommentsByPostIdRequest: () => ({ type: GET_COMMENTS_REQUEST }),
  getCommentsByPostIdSuccess: (comments: Comment[]) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: comments,
  }),
  getCommentsByPostIdFailed: () => ({
    type: GET_COMMENTS_FAILED,
  }),

  postNewCommentRequest: () => ({ type: POST_NEW_COMMENT_REQUEST }),
  postNewCommentSuccess: (newComment: CommentItem) => ({
    type: POST_NEW_COMMENT_SUCCESS,
    payload: newComment,
  }),
  postNewCommentFailed: (error: string) => ({
    type: POST_NEW_COMMENT_FAILED,
    payload: error,
  }),
  getRandomImageRequest: () => ({ type: GET_RANDOM_IMG_REQUEST }),
  getRandomImageSuccess: (randomImageUrl: string) => ({
    type: GET_RANDOM_IMG_SUCCESS,
    payload: randomImageUrl,
  }),
  getRandomImageFailed: (error: string) => ({
    type: GET_RANDOM_IMG_FAILED,
    payload: error,
  }),
};

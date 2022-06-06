import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  POST_NEWPOST_FAILED,
  POST_NEWPOST_SUCCESS,
  POST_NEWPOST_REQUEST,
  DELETE_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POST_BY_ID_FAILED,
  GET_POST_BY_ID_REQUEST,
  GET_POST_BY_ID_SUCCESS,
  PUT_POST_FAILED,
  PUT_POST_REQUEST,
  PUT_POST_SUCCESS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
} from "./types";

import { API } from "../../helper/api";

export const PostsActionsCreator = {
  fetchPosts() {
    return async (dispatch: any) => {
      try {
        dispatch(PostsActionsCreator.getPostsRequest());
        const response = await API.getPosts();
        dispatch(PostsActionsCreator.getPostsSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.getPostsFailed(error));
      }
    };
  },
  fetchPostById(id: number | string | undefined) {
    return async (dispatch: any) => {
      try {
        dispatch(PostsActionsCreator.getPostByIdRequest());
        const response = await API.getPostById(id);
        dispatch(PostsActionsCreator.getPostByIdSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.getPostByIdFailed(error));
      }
    };
  },
  addNewPost(newPost: Post) {
    return async (dispatch: any) => {
      try {
        dispatch(PostsActionsCreator.postNewPostRequest());
        const response = await API.postNewPost(newPost);
        dispatch(PostsActionsCreator.postNewPostSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(PostsActionsCreator.postNewPostFailed(error));
      }
    };
  },
  editPost(editedPost: Post, id: string | number) {
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
      try {
        dispatch(PostsActionsCreator.getCommentsByPostIdRequest());
        const response = await API.getCommentsByPostId(postId);
        dispatch(PostsActionsCreator.getCommentsByPostIdSuccess(response.comments));
      } catch (error) {
        dispatch(PostsActionsCreator.getCommentsByPostIdFailed());
      }
    };
  },

  //actions
  getPostsRequest: () => ({ type: GET_POSTS_REQUEST }),
  getPostsSuccess: (payload: Post[]) => ({ type: GET_POSTS_SUCCESS, payload }),
  getPostsFailed: (error: any) => ({ type: GET_POSTS_FAILED, payload: error }),

  getPostByIdRequest: () => ({ type: GET_POST_BY_ID_REQUEST }),
  getPostByIdSuccess: (currentPost: Post) => ({
    type: GET_POST_BY_ID_SUCCESS,
    payload: currentPost,
  }),
  getPostByIdFailed: (error: any) => ({
    type: GET_POST_BY_ID_FAILED,
    payload: error,
  }),

  postNewPostRequest: () => ({ type: POST_NEWPOST_REQUEST }),
  postNewPostSuccess: (newPost: Post) => ({
    type: POST_NEWPOST_SUCCESS,
    payload: newPost,
  }),
  postNewPostFailed: (error: any) => ({
    type: POST_NEWPOST_FAILED,
    payload: error,
  }),

  putPostRequest: () => ({ type: PUT_POST_REQUEST }),
  putPostSuccess: (editedPost: Post) => ({
    type: PUT_POST_SUCCESS,
    payload: editedPost,
  }),
  putPostFailed: (error: any) => ({ type: PUT_POST_FAILED, payload: error }),

  deleteCurrentPostRequest: () => ({ type: DELETE_POST_REQUEST }),
  deleteCurrentPostSuccess: (postId: number | string | undefined) => ({
    type: DELETE_POST_SUCCESS,
    payload: postId,
  }),
  deleteCurrentPostFailed: (error: any) => ({
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
};

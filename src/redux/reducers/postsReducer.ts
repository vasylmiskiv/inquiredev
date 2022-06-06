import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  POST_NEWPOST_SUCCESS,
  POST_NEWPOST_REQUEST,
  POST_NEWPOST_FAILED,
  DELETE_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POST_BY_ID_FAILED,
  GET_POST_BY_ID_REQUEST,
  GET_POST_BY_ID_SUCCESS,
} from "../actions/types";

const initialState: initialState = {
  posts: [],
  currentPost: {},
  isLoading: false,
  error: null,
};

export default function postsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_POST_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentPost: action.payload,
      };
    case GET_POST_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case POST_NEWPOST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_NEWPOST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [action.payload, ...state.posts],
      };
    case POST_NEWPOST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter((post: Post) => post.id !== action.payload),
      };
    case DELETE_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

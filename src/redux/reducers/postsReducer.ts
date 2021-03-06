import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  POST_NEW_POST_SUCCESS,
  POST_NEW_POST_REQUEST,
  POST_NEW_POST_FAILED,
  PUT_POST_REQUEST,
  PUT_POST_FAILED,
  PUT_POST_SUCCESS,
  DELETE_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  POST_NEW_COMMENT_FAILED,
  POST_NEW_COMMENT_REQUEST,
  POST_NEW_COMMENT_SUCCESS,
  GET_RANDOM_IMG_FAILED,
  GET_RANDOM_IMG_REQUEST,
  GET_RANDOM_IMG_SUCCESS,
} from "../actions/types";

const initialState: initialState = {
  posts: [],
  currentPost: {
    id: "",
    title: "",
    body: "",
  },
  comments: [],
  isLoading: false,
  randomImage: "",
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
        posts: action.payload
          .filter((post: Post) => post.title && post.body)
          .reverse(),
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case POST_NEW_POST_REQUEST:
      return {
        ...state,
      };
    case POST_NEW_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case POST_NEW_POST_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case PUT_POST_REQUEST:
      return {
        ...state,
      };
    case PUT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case PUT_POST_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.payload),
      };
    case DELETE_POST_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload
          .reverse()
          .filter((comment: CommentItem) => comment.body),
      };
    case GET_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        comments: [],
      };
    case POST_NEW_COMMENT_REQUEST:
      return {
        ...state,
      };
    case POST_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case POST_NEW_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case GET_RANDOM_IMG_REQUEST:
      return {
        ...state,
      };
    case GET_RANDOM_IMG_SUCCESS:
      return {
        ...state,
        randomImage: action.payload,
      };
    case GET_RANDOM_IMG_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

interface Post {
  id: number | string;
  title: string;
  body: string;
  timestamp?: string | Date;
}

interface CommentItem {
  id: string | number | undefined;
  postId: string | number | undefined;
  userName: string,
  body: string;
  timestamp: string | Date,
}

interface initialState {
  posts: Post[];
  currentPost: Post;
  comments: CommentItem[];
  isLoading: boolean;
  error: null | string;
}

type Reducers = {
  posts: initialState;
};

interface Params {
  method: string;
  headers?: {
    "Content-Type": string;
  };
  body?: string;
}

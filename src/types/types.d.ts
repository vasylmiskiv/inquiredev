interface Post {
  id: number | string;
  title: string;
  body: string;
  image?: string;
  timestamp?: string | Date;
}

interface CommentItem {
  id: string | number | undefined;
  postId: string | number | undefined;
  userName: string;
  body: string;
  timestamp: string | Date;
}

interface initialState {
  posts: Post[];
  currentPost: Post;
  comments: CommentItem[];
  isLoading: boolean;
  randomImage: string;
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

interface textLimit {
  title: number,
  body: number,
}

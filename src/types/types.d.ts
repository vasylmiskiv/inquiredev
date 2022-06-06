interface Post {
  id: number | string;
  title: string;
  body: string;
  timestamp?: string | Date;
}

interface Comment {
  id: string | number,
  postId: string | number;
  body: string;
}

interface initialState {
  posts: Post[];
  currentPost: Post;
  comments: Comment[];
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

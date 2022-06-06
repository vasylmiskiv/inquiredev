interface Post {
  id: number | string;
  title: string;
  body: string;
  comments: Comment[];
  timestamp?: Date;
}

interface Comment {
  posId: string | number;
  body: string;
}

interface initialState {
  posts: Post[];
  currentPost: Post | {};
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

const BASE_URL = "https://bloggy-api.herokuapp.com";
const UNSPLASH_KEY = "IO3modUlr3ZEz1bvj8wCesV_Jw6zGKvBuXxNTSLgBKA";
const UNSPLASH_URL = "https://api.unsplash.com";

const request = async (
  endPoint: string,
  params: Params = { method: "GET" },
  url = BASE_URL
) => {
  try {
    const response = await fetch(`${url}${endPoint}`, params);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error with request with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const API = {
  getPosts: () => request("/posts"),
  getPostById: (id: number | string | undefined) => request(`/posts/${id}`),
  postNewPost: (newPost: Post) =>
    request("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }),
  putEditedPost: (editedPost: Post, id: number | string) =>
    request(`/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPost),
    }),
  deleteCurrentPost: (postId: number | string | undefined) =>
    request(`/posts/${postId}`, { method: "DELETE" }),
  getCommentsByPostId: (postId: number | string | undefined) =>
    request(`/posts/${postId}?_embed=comments`),
  postNewComment: (newComment: CommentItem) =>
    request(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }),
  getRandomImage: () =>
    request(
      `/photos/random?client_id=${UNSPLASH_KEY}`,
      { method: "GET" },
      UNSPLASH_URL
    ).then((data) => data.urls.regular),
};

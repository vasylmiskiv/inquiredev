const url = "https://bloggy-api.herokuapp.com";

// set up our request
const request = async (
  endPoint: string,
  params: Params = { method: "GET" }
) => {
  try {
    const response = await fetch(`${url}${endPoint}`, params);
    const data = await response.json();

    if(!response.ok) {
      throw new Error(`Error with request with status ${response.status}`)
    }

    return data
  } catch(error) {
    console.log(error)
  }
};

// write all REST API methods to endpoint 
export const API = {
  getPosts: () => request('/posts'),
  getPostById: (id: number | string | undefined) => request(`/posts/${id}`),
  postNewPost: (newPost: Post) => request('/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost)
  }),
  putEditedPost: (editedPost: Post, id: number | string) => request(`/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedPost)
  }),
  deleteCurrentPost: (postId: number | string) => request(`/posts/${postId}`, { method: 'DELETE' })
}
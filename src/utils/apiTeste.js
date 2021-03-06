import axios from "axios";

const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
  "Content-Type": "application/json"
};

export const createNewComment = (id, timestamp, body, author, parentId) => {
  return axios.post(
    `${api}/comments`,
    { id, timestamp, body, author, parentId },
    { headers }
  );
};

//Get all posts of the api
export const getAllPosts = () => {
  return axios.get(`${api}/posts`, { headers });
};

//Get all post by id
export const getPostsById = id => {
  return axios.get(`${api}/posts/${id}`, { headers });
};

//Get all comments of a specific post by Id
export const getAllCommentsById = id => {
  return axios.get(`${api}/posts/${id}/comments`, { headers });
};

export const getCommentById = id => {
  return axios.get(`${api}/comments/${id}`, { headers });
};

// Vote down a comment by Id
export const voteDownComment = id => {
  return axios.post(
    `${api}/comments/${id}`,
    { option: "downVote" },
    { headers }
  );
};

// Vote up a comment by Id
export const voteUpComment = id => {
  return axios.post(`${api}/comments/${id}`, { option: "upVote" }, { headers });
};

// Delete comment
export const deleteComment = id => {
  console.log(id);
  return axios.delete(`${api}/comments/${id}`, { headers });
};

// Delete Post
export const deletePost = id => {
  console.log(id);
  return axios.delete(`${api}/posts/${id}`, { headers });
};

export const createPost = (id, timestamp, title, body, author, category) => {
  return axios.post(
    `${api}/posts`,
    {
      id,
      timestamp,
      title,
      author,
      body,
      category
    },
    { headers }
  );
};

// Vote up a Post by Id
export const voteUpPost = id => {
  return axios.post(`${api}/posts/${id}`, { option: "upVote" }, { headers });
};

// Vote down a Post by Id
export const voteDownPost = id => {
  return axios.post(`${api}/posts/${id}`, { option: "downVote" }, { headers });
};

///////////// CATEGORY
export const getAllCategory = () => {
  return axios.get(`http://localhost:3001/categories`, { headers });
};

export const getCategoryDefined = category => {
  return axios.get(`${api}/${category}/posts`, { headers });
};

//////////EDIT:
export const editPost = (id, title, body) => {
  return axios.put(
    `${api}/posts/${id}`,
    {
      title,
      body
    },
    { headers }
  );
};

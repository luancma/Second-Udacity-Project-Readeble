import {
  getAllPosts,
  createPost,
  voteUpPost,
  voteDownPost
} from "../../utils/apiTeste";
export const FETCH_POSTS = "FETCH_POSTS";
export const ACTION_ADD_POST = "ACTION_ADD_POST";
export const ADD_VOTE_POST = "ADD_VOTE_POST";
export const REMOVE_VOTE_POST = "REMOVE_VOTE_POST";

export function fetchAllPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts
  };
}

export function addVotePost(post) {
  return {
    type: ADD_VOTE_POST,
    post
  };
}

export function remoteVotePost(post) {
  return {
    type: REMOVE_VOTE_POST,
    post
  };
}

export function addPostSuccess(post) {
  return {
    type: ACTION_ADD_POST,
    post
  };
}

export const actionAddPostSuccess = (
  id,
  timestamp,
  title,
  author,
  textBody,
  category
) => {
  return dispatch => {
    return createPost(id, timestamp, title, author, textBody, category)
      .then(response => {
        dispatch(addPostSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionVoteUpPost = id => {
  return dispatch => {
    return voteUpPost(id)
      .then(response => {
        dispatch(addVotePost(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionVoteDownPost = id => {
  return dispatch => {
    return voteDownPost(id)
      .then(response => {
        dispatch(remoteVotePost(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchAllPosts = () => {
  return dispatch => {
    return getAllPosts()
      .then(response => {
        dispatch(fetchAllPostsSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

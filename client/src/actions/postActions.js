import axios from "axios";
import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  GET_POST
} from "./types";

// Add Post
// Добавить пост
export const addPostAction = (postData, changePost, changeErrors) => {
  axios
    .post("/api/posts/", postData)
    .then(res => {
      changePost({
        type: ADD_POST,
        payload: res.data
      });
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
//Получить посты
export const getPostsAction = changePost => {
  changePost(setPostLoading());
  axios
    .get("/api/posts/")
    .then(res => {
      changePost({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      changePost({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Get Posts
//Получить посты
export const getPostAction = (id, changePost) => {
  changePost(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      changePost({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      changePost({
        type: GET_POST,
        payload: null
      })
    );
};

//Delete post
//Удалить пост
export const deletePostAction = (id, changePost, changeErrors) => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      changePost({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Add like
//Поставить лайк
export const addLikeAction = (id, changePost, changeErrors) => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => {
      getPostsAction(changePost);
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Remove like
//Удалить лайк
export const removeLikeAction = (id, changePost, changeErrors) => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => getPostsAction(changePost))
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
// Добавить комментарий
export const addCommentAction = (
  postId,
  newComment,
  changePost,
  changeErrors
) => {
  axios
    .post(`/api/posts/comment/${postId}`, newComment)
    .then(res => {
      changePost({
        type: GET_POST,
        payload: res.data
      });
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Comment
// Удалить комментарий
export const deleteCommentAction = (
  postId,
  commentId,
  changePost,
  changeErrors
) => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res => {
      changePost({
        type: GET_POST,
        payload: res.data
      });
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set loading state
//Загружается или нет
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

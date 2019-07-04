import axios from "axios";
import { ADD_POST, GET_ERRORS } from "./types";

// Add Post
// Добавить пост
export const addPostAction = (postData, changePost, changeErrors) => {
  axios
    .post("/api/posts/", postData)
    .then(res =>
      changePost({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

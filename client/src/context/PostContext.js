import React, { useReducer } from "react";
import { postReducer, initialState } from "reducers/postReducer";

let PostContext = React.createContext();

const PostProvider = props => {
  let [post, changePost] = useReducer(postReducer, initialState);
  let value = { post, changePost };
  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
};

export { PostContext, PostProvider };

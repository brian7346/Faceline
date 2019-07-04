import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ErrorContext } from "../../context/ErrorContext";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";
import PostForm from "./PostForm";
import { Spinner } from "../";

const Post = () => {
  const { theme } = useContext(ThemeContext);
  const { errors, changeErrors } = useContext(ErrorContext);
  const { post, changePost } = useContext(PostContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="feed min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PostForm
              darkMode={theme.darkMode}
              errors={errors}
              auth={auth}
              changePost={changePost}
              changeErrors={changeErrors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ErrorContext } from "../../context/ErrorContext";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import { Spinner } from "../";
import { getPostsAction } from "../../actions/postActions";

const Post = () => {
  const { theme } = useContext(ThemeContext);
  const { errors, changeErrors } = useContext(ErrorContext);
  const { post, changePost } = useContext(PostContext);
  const { auth } = useContext(AuthContext);

  const { loading } = post;

  useEffect(() => {
    getPostsAction(changePost);
  }, []);

  let postContent;

  if (post.post === null || loading) {
    postContent = <Spinner />;
  } else {
    postContent = <PostFeed posts={post.posts} />;
  }

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
            {postContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

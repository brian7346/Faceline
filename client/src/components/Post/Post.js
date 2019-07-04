import React, { useEffect, useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { Spinner, CustomLink } from "../";
import { getPostAction } from "../../actions/postActions";
import PostItem from "../Posts/Postsitem";
import CommentForm from "./CommentForm";

const Post = props => {
  const { id } = props.match.params;
  const { post, changePost } = useContext(PostContext);
  const { loading } = post;

  let postContent;

  if (post.post === null || loading || Object.keys(post.post).length === 0) {
    postContent = <Spinner />;
  } else {
    postContent = (
      <>
        <PostItem post={post.post} showActions={false} />
        <CommentForm postId={post.post._id} />
      </>
    );
  }

  useEffect(() => {
    getPostAction(id, changePost);
  }, []);
  return (
    <div className="post min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CustomLink
              to="/feed"
              btnLight
              marginBottom
              title="Вернутся к ленте"
            />
            {postContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

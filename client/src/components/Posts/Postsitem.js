import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { ErrorContext } from "../../context/ErrorContext";
import { PostContext } from "../../context/PostContext";
import { CustomLink } from "..";
import {
  deletePostAction,
  addLikeAction,
  removeLikeAction
} from "../../actions/postActions";

const PostsItem = props => {
  const { auth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { changeErrors } = useContext(ErrorContext);
  const { changePost } = useContext(PostContext);

  const { post, showActions } = props;
  const onDeleteClick = id => {
    deletePostAction(id, changePost, changeErrors);
  };

  const onLikeClick = id => {
    addLikeAction(id, changePost, changeErrors);
  };

  const onUnikeClick = id => {
    removeLikeAction(id, changePost, changeErrors);
  };

  const findUserLike = likes => {
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  let cardBodyClassNames = classNames({
    card: true,
    "card-body": true,
    "mb-3": true,
    "dark-bg": theme.darkMode,
    "white-border": theme.darkMode
  });

  let likeButtonClassNames = classNames({
    fas: true,
    "fa-thumbs-up": true,
    "text-info": findUserLike(post.likes)
  });
  return (
    <div className={cardBodyClassNames}>
      <div className="row">
        <div className="col-md-2">
          <a href="profile.html">
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
            />
          </a>
          <br />
          <p className="text-center">{post.name}</p>
        </div>
        <div className="col-md-10">
          <p className="lead">{post.text}</p>
          {showActions ? (
            <span>
              <button
                type="button"
                className="btn btn-light mr-1"
                onClick={() => onLikeClick(post._id)}
              >
                <i className={likeButtonClassNames} />
                <span className="badge badge-light">{post.likes.length}</span>
              </button>
              <button
                type="button"
                className="btn btn-light mr-1"
                onClick={() => onUnikeClick(post._id)}
              >
                <i className="text-secondary fas fa-thumbs-down" />
              </button>
              <CustomLink
                to={`/post/${post._id}`}
                marginRight
                title="Комментарии"
              />
              {post.user === auth.user.id ? (
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => onDeleteClick(post._id)}
                >
                  <i className="fas fa-times" />
                </button>
              ) : null}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

PostsItem.propTypes = {
  post: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

PostsItem.defaultProps = {
  showActions: true
};

export default PostsItem;

import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";
import { ThemeContext } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import { deleteCommentAction } from "../../actions/postActions";
import classNames from "classnames";

const CommentItem = props => {
  const { changePost } = useContext(PostContext);
  const { auth } = useContext(AuthContext);
  const { changeErrors } = useContext(ErrorContext);
  const { theme } = useContext(ThemeContext);

  const { comment, postId } = props;
  const { darkMode } = theme;

  const onDeleteClick = (postId, commentId) => {
    deleteCommentAction(postId, commentId, changePost, changeErrors);
  };

  const cardBodyClassNames = classNames({
    "card-body": true,
    "mb-3": true,
    "card-body": true,
    "dark-bg-second ": darkMode,
    "white-border": darkMode
  });

  return (
    <div className={cardBodyClassNames}>
      <div className="row">
        <div className="col-md-2">
          <a href="profile.html">
            <img
              className="rounded-circle d-none d-md-block"
              src={comment.avatar}
              alt=""
            />
          </a>
          <br />
          <p className="text-center">{comment.name}</p>
        </div>
        <div className="col-md-10">
          <p className="lead">{comment.text}</p>
          {comment.user === auth.user.id ? (
            <button
              type="button"
              className="btn btn-danger mr-1"
              onClick={() => onDeleteClick(postId, comment._id)}
            >
              <i className="fas fa-times" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentItem;

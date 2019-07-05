import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CustomTextArea, CustomButton } from "../";
import { addCommentAction } from "../../actions/postActions";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { ErrorContext } from "../../context/ErrorContext";
import { PostContext } from "../../context/PostContext";
import classNames from "classnames";

const CommentForm = props => {
  const { auth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { errors, changeErrors } = useContext(ErrorContext);
  const { changePost } = useContext(PostContext);
  const { darkMode } = theme;

  const [text, changeText] = useState("");

  const handleChangeText = event => changeText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    const { user } = auth;
    const { postId } = props;

    const newComment = {
      text,
      name: user.name,
      avatar: user.avatar
    };

    addCommentAction(postId, newComment, changePost, changeErrors);
    changeText("");
  };

  const cardHeaderClassNames = classNames({
    "card-header": true,
    "bg-info": !darkMode,
    "dark-bg": darkMode,
    "text-white": true
  });

  const cardBodyClassNames = classNames({
    "card-body": true,
    "dark-bg-second ": darkMode
  });

  return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className={cardHeaderClassNames}>Добавьте комментарий...</div>
        <div className={cardBodyClassNames}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <CustomTextArea
                placeholder="Комментарий к записи"
                name="text"
                value={text}
                onChange={handleChangeText}
                errors={errors}
              />
            </div>
            <CustomButton type="submit" value="Добавить" />
          </form>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired
};

export default CommentForm;

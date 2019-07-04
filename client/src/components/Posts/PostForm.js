import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CustomTextArea, CustomButton } from "../";
import { addPostAction } from "../../actions/postActions";
import classNames from "classnames";

const PostForm = props => {
  const { errors, darkMode, auth, changePost, changeErrors } = props;
  const [text, changeText] = useState("");

  const handleChangeText = event => changeText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    const { user } = auth;

    const newPost = {
      text,
      name: user.name,
      avatar: user.avatar
    };

    addPostAction(newPost, changePost, changeErrors);
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
        <div className={cardHeaderClassNames}>Скажите что-нибудь...</div>
        <div className={cardBodyClassNames}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <CustomTextArea
                placeholder="Что нового?"
                name="text"
                value={text}
                onChange={handleChangeText}
                errors={errors}
              />
            </div>
            <CustomButton type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  errors: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  changePost: PropTypes.func.isRequired,
  changeErrors: PropTypes.func.isRequired
};

export default PostForm;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CustomTextArea, CustomButton } from "../";
import { addPostAction } from "../../actions/postActions";
import classNames from "classnames";
import { GET_ERRORS } from "../../actions/types";

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
  useEffect(() => {
    return () => {
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

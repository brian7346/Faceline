import React from "react";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

const AppWrapper = props => {
  let { state, dispatch } = React.useContext(ThemeContext);

  let appWrapperClassNames = classNames({
    App: true,
    "dark-theme": state.darkMode
  });

  return <div className={appWrapperClassNames}>{props.children}</div>;
};

export default AppWrapper;

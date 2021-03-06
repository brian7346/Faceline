import React from "react";
import "./SwitchBtn.scss";
import { ThemeContext } from "../../../context/ThemeContext";
import { changeThemeAction } from "../../../actions/themeActions";

const SwitchBtn = props => {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  const switchState = theme.darkMode ? "switch on" : "switch off";
  const update = () => {
    changeTheme(changeThemeAction());
    localStorage.setItem("darkMode", !theme.darkMode);
  };
  return <div className={switchState} onClick={update} />;
};

export default SwitchBtn;

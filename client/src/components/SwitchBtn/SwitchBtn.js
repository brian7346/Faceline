import React from "react";
import "./SwitchBtn.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { changeThemeAction } from "../../actions/themeActions";

const SwitchBtn = props => {
  let { theme, changeTheme } = React.useContext(ThemeContext);

  const switchState = theme.darkMode ? "switch on" : "switch off";
  const update = () => changeTheme(changeThemeAction());

  return <div className={switchState} onClick={update} />;
};

export default SwitchBtn;

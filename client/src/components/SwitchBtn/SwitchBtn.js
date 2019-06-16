import React from "react";
import "./SwitchBtn.scss";
import { ThemeContext } from "../../context/ThemeContext";

const SwitchBtn = props => {
  let { state, dispatch } = React.useContext(ThemeContext);

  const switchState = state.darkMode ? "switch on" : "switch off";
  const update = () => dispatch({ type: "CHANGE_THEME" });

  return <div className={switchState} onClick={update} />;
};

export default SwitchBtn;

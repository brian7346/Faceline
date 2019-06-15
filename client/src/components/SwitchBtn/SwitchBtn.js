import React from "react";
import "./SwitchBtn.scss";
import { StateContext } from "../../context/Context";

const SwitchBtn = props => {
  let { state, dispatch } = React.useContext(StateContext);

  const switchState = state.darkMode ? "switch on" : "switch off";
  const update = () => dispatch({ type: "CHANGE_THEME" });

  return <div className={switchState} onClick={update} />;
};

export default SwitchBtn;

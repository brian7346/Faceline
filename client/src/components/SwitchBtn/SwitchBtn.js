import React, { useState } from "react";
import "./SwitchBtn.scss";

const SwitchBtn = props => {
  const [isOn, toggleIsOn] = useState(false);
  const switchState = isOn ? "switch on" : "switch off";
  const update = () => {
    toggleIsOn(!isOn);
  };
  return <div className={switchState} onClick={() => update()} />;
};

export default SwitchBtn;

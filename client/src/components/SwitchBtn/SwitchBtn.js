import React, { useState } from "react";
import "./SwitchBtn.scss";

const SwitchBtn = props => {
  const [isOn, toggleIsOn] = useState(false);
  const switchState = isOn ? "switch on" : "switch off";
  const handleSwitch = () => {
    toggleIsOn(!isOn);
  };
  return <div className={switchState} onClick={() => handleSwitch()} />;
};

export default SwitchBtn;

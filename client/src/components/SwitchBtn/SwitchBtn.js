import React, { useState } from "react";
import "./SwitchBtn.scss";

const SwitchBtn = () => {
  const [isOn, toggleIsOn] = useState(false);
  const switchState = isOn ? "switch on" : "switch off";
  return <div className={switchState} onClick={() => toggleIsOn(!isOn)} />;
};

export default SwitchBtn;

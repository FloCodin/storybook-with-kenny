import React, { useState } from "react";
import "./switch.css";
import { Simulate } from "react-dom/test-utils";

export type SwitchProps = {
    /**
     * Decides if the shape is rounded or rectangular
     */
    rounded?: boolean;
    /**
     * The color the switch will be we checked
     */
    colorChecked?: string;
    /**
     * The color the switch will be we when unchecked
     */
  colorUnchecked?: string;
};

const Switch: React.FC<SwitchProps> = ({
  rounded = false,
  colorChecked = "#",
  colorUnchecked = "#",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation(); // Stop event propagation
    setIsChecked(!isChecked);
  };

  return (
    <label className={`switch ${isChecked ? "checked" : ""}`}>
      <input
        type="checkbox"
        onClick={toggleSwitch}
        style={{ backgroundColor: isChecked ? colorChecked : colorUnchecked }}
      />
      <span
        className={`slider  ${rounded ? "round" : ""}`}
        style={{ backgroundColor: isChecked ? colorChecked : colorUnchecked }}
      ></span>
    </label>
  );
};

export default Switch;

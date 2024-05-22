import React, {useState} from 'react';
import './switch.css';
import {Simulate} from "react-dom/test-utils";

export type SwitchProps = {
    rounded?: boolean;
    colorChecked?: string;
    colorUnchecked?: string;
};

const Switch: React.FC<SwitchProps> = ({rounded = false, colorChecked = '#', colorUnchecked = '#'}) => {
    const [isChecked, setIsChecked] = useState(false);


    const toggleSwitch = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.stopPropagation(); // Stop event propagation
        setIsChecked(!isChecked);
        console.log("clicked", isChecked)
        console.log("clicked", colorUnchecked)
        console.log("clicked", colorChecked)
    };

    return (
        <label className={`switch ${isChecked ? 'checked' : ''}`} >
            <input type="checkbox" onClick={toggleSwitch}
                   style={{backgroundColor: isChecked ? colorChecked : colorUnchecked,}}/>
            <span className={`slider  ${rounded ? 'round' : ''}`}
                  style={{backgroundColor: isChecked ? colorChecked : colorUnchecked}}></span>
        </label>
    );
};

export default Switch;
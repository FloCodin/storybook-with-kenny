import React, { useState } from 'react';
import './switch.css';

export type SwitchProps = {
    rounded?: boolean;
    colorChecked?: string;
    colorUnchecked?: string;
};

const Switch: React.FC<SwitchProps> = ({ rounded = false, colorChecked = '#', colorUnchecked = '#' }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        console.log("clicked", isChecked)
        setIsChecked(!isChecked);

    };

    return (
        <label className={`switch ${isChecked ? 'checked' : ''}`} onClick={toggleSwitch}>
            <input type="checkbox"  />
            <span className={`slider ${rounded ? 'round' : ''}`}></span>
        </label>
    );
};

export default Switch;
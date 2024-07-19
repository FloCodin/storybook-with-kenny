import React from "react";

interface ButtonProps {
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
    outlined: boolean;
    buttonColor: string;
    textColor?: string
    borderColor?: string
}


export const Button = ({
                           outlined = true,
                           buttonColor = "bg-red-500",
                           size = "medium",
                           textColor = "text-black",
                           borderColor = "border-blue-600",
                           label,
                           ...props
                       }: ButtonProps) => {
    const sizeClasses = {
        small: 'p-2 text-sm',
        medium: 'p-3 text-base',
        large: 'p-4 text-lg'
    };
    const sizeClass = sizeClasses[size];
    const outlinedClasses = outlined ? `${borderColor} border-2 bg-transparent`  : '';
    const fullClasses = !outlined ? `border-none`  : '';

    return (
        <button
            type="button"
            className={`storybook-button ${sizeClass} ${buttonColor} ${outlinedClasses} ${fullClasses} ${textColor} rounded-full text font-bold cursor-pointer inline-block`}
            {...props}
        >
            {label}
        </button>
    );
};

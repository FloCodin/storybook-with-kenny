import React from "react";
import "./button.css";

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    outlined: boolean;

    buttonColor: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                           primary = false,
                           outlined = true,
                           buttonColor = "bg-red-500",
                           size = "medium",
                           label,
                           ...props
                       }: ButtonProps) => {


    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";


    const buttonStyle = outlined
        ? {
            backgroundColor: 'transparent',
            border: `3px solid ${buttonColor || 'currentColor'}`,
            color: buttonColor || 'currentColor',
        }
        : {
        backgroundColor: buttonColor || 'currentColor',

        };
    return (
        <button
            type="button"
            className={`${buttonColor}` + [" storybook-button", `storybook-button--${size}`, mode].join(
                " ",
            )}
            style={buttonStyle}
            {...props}
        >
            {label}
        </button>
    );
};

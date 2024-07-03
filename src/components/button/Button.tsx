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
    backgroundColor?: string;
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

}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                           primary = false,
                           outlined = true,
                           size = "medium",
                           backgroundColor,
                           label,
                           ...props
                       }: ButtonProps) => {


    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";


    const buttonStyle = outlined
        ? {
            backgroundColor: 'transparent',
            border: `3px solid ${backgroundColor || 'currentColor'}`,
            color: backgroundColor || 'currentColor',
        }
        : {
            backgroundColor: backgroundColor || 'initial',
        };


    return (
        <button
            type="button"
            className={"" + ["storybook-button", `storybook-button--${size}`, mode].join(
                " ",
            )}
            style={buttonStyle}
            {...props}
        >
            {label}
            <style jsx>{`
              button {
                background-color: ${backgroundColor};

              }
            `}</style>
        </button>
    );
};

interface InputFieldProps {
    /**
     * Label of the input field.
     */
    inputLabel: string;
    /**
     * ID of the input field.
     */
    inputId: string;
    /**
     *  Tailwind color class (e.g. "border-violet-400".)
     */
    inputBorderColor?: string;
    /**
     *  Tailwind color class (e.g. "border-violet-400".)
     */
    backgroundColor?: string;
    /**
     *  Border style with 3 options.
     */
    borderStyle: "border around" | "no border" | "border bottom";
    /**
     * The text inside the text field.
     */
    placeholder?: string
    /**
     * Input is required ?.
     */
    required?: boolean
    /**
     * regex to check the input.
     */
    pattern?: string
}

export const InputField = ({
                               inputLabel = "Email",
                               inputId = "email",
                               inputBorderColor = "border-purple-500",
                               backgroundColor = "bg-white",
                               borderStyle = "border around",
                               placeholder = "Enter your email",
                               required = false,
                               pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Regex pattern for email

                           }: InputFieldProps) => {

    let borderStyleString;
    switch (borderStyle) {
        case "no border":
            borderStyleString = `border-none pl-2 ${backgroundColor}`;
            break;
        case "border bottom":
            borderStyleString = `border-b-2 pl-2 ${inputBorderColor} ${backgroundColor}`;
            break;
        case "border around":
            borderStyleString = `${inputBorderColor} pl-2 border-2 ${backgroundColor}`;
    }

    return (
        <>
            <form>
                <label htmlFor={inputId} className={'dark:text-white'}>{inputLabel}:</label>
                <input
                    type="text"
                    id={inputId}
                    name={"Input1"}
                    placeholder={placeholder}
                    className={`${borderStyleString}`}
                    required={required}
                    pattern={pattern}
                    title={"Please enter a valid email address."}
                />
            </form>
        </>
    );
}

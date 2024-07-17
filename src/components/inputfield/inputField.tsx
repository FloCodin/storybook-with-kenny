interface InputFieldProps {
    /**
     * A good choosen name for the Inputfield.
     */
    inputLabel: string;
    /**
     * An ID to understand which Element it is.
     */
    inputId: string;
    /**
     *  Tailwind color class for example: "border-violet-400".
     */
    inputBorderColor?: string;
    /**
     *  Use Tailwind color classes for example: "border-violet-400".
     */
    backgroundColor?: string;
    /**
     *  A choice of 3 modern Border styles.
     */
    borderStyle: "border around" | "no border" | "border bottom";
    /**
     * Not necessary but it is the text inside the text field.
     */
    placeholder?: string
    /**
     * Tells if an answer is required/expected from the field.
     */
    required?: boolean
    /**
     * Tells which characters are forced to be used for example: "every email must have a @ and . ".
     */
    pattern?: string // Optional pattern property.
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

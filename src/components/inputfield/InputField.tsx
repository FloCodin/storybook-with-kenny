interface InputFieldProps {
    inputLabel: string;

    inputId: string;
    /**
     *  Tailwind color class like: border-violet-400
     */
    inputBorderColor?: string;

    /**
     *  Use Tailwind color classes bg-YourColor-100-900
     */
    backgroundColor?: string;

    /**
     *  A choice of the 3 possible Border styles
     */
    borderStyle: "border around" | "no border" | "border bottom";

    /**
     * not required but the text inside the textfield
     */
    placeholder?: string

    /*
    * if an answer is requiered/expected from the field
    */
    required?: boolean
    /**
     *
     */
    pattern?: string // Optional pattern property
}



export const InputField = ({
                               inputLabel="Email",
                               inputId="email",
                               inputBorderColor="border-purple-500",
                               backgroundColor="bg-white",
                               borderStyle="border around",
                               placeholder="Enter your email",
                               required=false,
                               pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Regex pattern for email

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
                <label htmlFor={inputId}>{inputLabel}:</label>
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

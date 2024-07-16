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
    required: boolean
}



export const InputField = ({
                               inputLabel = "first name ",
                               inputId = "text",
                               inputBorderColor = "border-violet-400", // Standardwert für die Randfarbe
                               backgroundColor = "bg-yellow-100",
                               borderStyle = "border around",
                               placeholder = "your text here",
                               required = false
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
                />

            </form>
        </>
    );
}

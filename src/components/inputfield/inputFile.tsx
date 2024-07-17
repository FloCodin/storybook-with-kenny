import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputFileProps {

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

}

export const InputFile = ({
                               inputBorderColor = "border-purple-500",
                               backgroundColor = "bg-white",
                               borderStyle = "border around",

                           }: InputFileProps) => {

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
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input
                id="picture"
                type="file"
                className={`${borderStyleString}`}
            />
        </div>
    )
}
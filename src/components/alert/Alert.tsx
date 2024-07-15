import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import * as React from "react";

type AlertContent = {
    triggerText: string;
    textTitle: string;
    textDescription: string;
}

interface AlertProps {
    /**
     * Insert Tailwind color classes bg-secondary // bg-blue-500
     */
    triggerColor?: string;
    /**
     * Insert Tailwind color classes bg-secondary // bg-blue-500
     */
    alertBackground?: string;
    /**
     *  Tailwind font styling text-black
     */
    textColor: string;
    /**
     * Insert Tailwind color classes bg-secondary // bg-blue-500
     */
    continueButton?: string;
    content?: AlertContent;
}

const testContent: AlertContent = {
    triggerText: "Delete",
    textTitle: "Are you sure you want to delete everything",
    textDescription: "If you press continue, all of your files and memories will be deleted and be flush away"
}

export const Alert = ({
                          alertBackground = "bg-blue-500",
                          triggerColor = "bg-secondary",
                          textColor = "text-black",
                          continueButton = "bg-orange-500",
                          content = testContent
                      }: AlertProps) => {

    return (
        <>
            <AlertDialog>
                <div
                    className={`border-solid border-gray-500 border-2 flex justify-center text-green-500 ${triggerColor}`}
                >
                    <AlertDialogTrigger className={`${triggerColor} ${textColor}`}>
                        {content.triggerText || "Alert"}
                    </AlertDialogTrigger>
                </div>
                <AlertDialogContent className={`${alertBackground}`}>
                    <AlertDialogHeader className={`${textColor}`}>
                        <AlertDialogTitle className={`${textColor}`}>{content.textTitle}</AlertDialogTitle>
                        <AlertDialogDescription className={`text-[${textColor}]`}>
                            {content.textDescription}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className={`${continueButton}`}>
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

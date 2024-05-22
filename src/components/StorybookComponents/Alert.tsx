import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import * as React from "react";

export type AlertProps = {
    triggerColor?: string;
    triggerText?: string;
    alertBackground?: 'bg-primary' | 'bg-secondary';
    textColor?:string;
    textTitle?:string;
    textDescription?:string;
    continueButton?: 'bg-tertiary';
};


export default function Alert(props: AlertProps) {
    console.log(props)
    return (
        <>
            <AlertDialog>
                <div className={`border-solid border-gray-500 border-2 flex justify-center bg-${props.triggerColor}`}>
                    <AlertDialogTrigger className={`bg-${props.triggerColor}`}>{props.triggerText || "Alert"}</AlertDialogTrigger>
                </div>
                <AlertDialogContent className={`${props.alertBackground}`}>
                    <AlertDialogHeader className={`text-${props.textColor}`} >
                        <AlertDialogTitle>{props.textTitle || "Are you absolutely sure?"}</AlertDialogTitle>
                        <AlertDialogDescription className={`text-[${props.textColor}]`} >{props.textDescription || "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className={`${props.continueButton }`}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
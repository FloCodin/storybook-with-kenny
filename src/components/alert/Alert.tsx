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

export type AlertContent = {
  triggerText: string;
  textTitle: string;
  textDescription: string;
};

export type AlertProps = {
  triggerColor: "bg-blue-500" | "bg-red-500" | "bg-green-500";
  alertBackground?: "bg-blue-500" | "bg-red-500" | "bg-green-500";
  textColor: string;
  continueButton?:
    | "bg-black"
    | "bg-blue-500"
    | "bg-green-500"
    | "bg-red-500"
    | "bg-orange-500";
  content: [AlertContent];
};

export default function Alert(props: AlertProps) {
  console.log(props);
  const AlertContent: AlertContent = {
    triggerText: "Trigger",
    textTitle: "Werbung oder so",
    textDescription: "Hier könnte dein Text stehen",
  };
  return (
    <>
      <AlertDialog>
        <div
          className={`border-solid border-gray-500 border-2 flex justify-center bg-${props.triggerColor}`}
        >
          <AlertDialogTrigger className={`${props.triggerColor}`}>
            {AlertContent.triggerText || "Alert"}
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent className={`${props.alertBackground}`}>
          <AlertDialogHeader className={`${props.textColor}`}>
            <AlertDialogTitle>{AlertContent.textTitle}</AlertDialogTitle>
            <AlertDialogDescription className={`text-[${props.textColor}]`}>
              {AlertContent.textDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className={`${props.continueButton}`}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

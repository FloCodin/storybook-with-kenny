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
  triggerColor?: "bg-primary" |"bg-secondary"|"bg-tertiary";
  alertBackground?: string;
  textColor: string;
  continueButton?: string;
  content?: [AlertContent];
};

export default function Alert(props: AlertProps) {
  console.log(props);
  const AlertContent: AlertContent = {
    triggerText: "Trigger",
    textTitle: "Werbung oder so",
    textDescription: "Hier könnte dein Text stehen",
  };
  const AlertProps: AlertProps = {
    textColor: "text-blue-500",
  }
  return (
    <>
      <AlertDialog>
        <div
          className={`border-solid border-gray-500 border-2 flex justify-center text-green-500 bg-${props.triggerColor}`}
        >
          <AlertDialogTrigger className={`${props.triggerColor} ${props.textColor}`}>
            {AlertContent.triggerText || "Alert"}
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent className={`${props.alertBackground}`}>
          <AlertDialogHeader className={`${props.textColor}`}>
            <AlertDialogTitle className={`${props.textColor}`}>{AlertContent.textTitle}</AlertDialogTitle>
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

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
import {toast} from "sonner";
import {Button} from "@/components/ui/button";

type AlertContent = {
    triggerText: string;
    textTitle: string;
    textDescription: string;
}

interface AlertProps {
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     */
    triggerColor?: string;
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     */
    alertBackground?: string;
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     */
    textColor: string;
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     */
    actionButton?: string;
    /**
     * Set Tailwind color class (e.g. "border-violet-400" // bg-secondary.)
     */
    cancelButton?: string;
    /**
     * The label/text of the left button when the Dialog is open.
     */
    button1?: string;
    /**
     * The label/text of the right button when the Dialog is open.
     */
    button2?: string;
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
                          actionButton = "bg-orange-500",
                          cancelButton = "bg-emerald-300",
                          button1 = "Cancel",
                          button2 = "Delete everything!",
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
                        <AlertDialogCancel className={"bg-transparent hover:bg-transparent border-none"} >
                            <Button
                                variant="outline"
                                className={`${cancelButton}`}
                                onClick={() =>
                                    toast("you've canceled the deletion", {
                                        description: "Wednesday, July 17, 2023 at 03:35 PM",
                                        action: {
                                            label: "Undo",
                                            onClick: () => console.log("Undo"),
                                        },
                                    })
                                }
                            >
                                {button1}
                            </Button>
                        </AlertDialogCancel>
                        <AlertDialogAction className={"bg-transparent hover:bg-transparent border-none"}>
                            <Button
                                variant="outline"
                                className={`${actionButton}`}
                                onClick={() =>
                                    toast("you've deleted everything", {
                                        description: "\"Wednesday, July 17, 2023 at 03:35 PM\"",
                                        action: {
                                            label: "Undo",
                                            onClick: () => console.log("Undo"),
                                        },
                                    })
                                }
                            >
                                {button2}
                            </Button>
                </AlertDialogAction>


                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
toast("Event has been created.")
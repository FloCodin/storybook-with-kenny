import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import React from "react";

type DropdownListContent = {
    title: string;
    Choice1: string;
    Choice2: string;
    Checked: string;
    radioValue1: "Top" | "Bottom" | "Right" | "Left";
    radioValue2: "Top" | "Bottom" | "Right" | "Left";
    radioValue3: "Top" | "Bottom" | "Right" | "Left";
    radioValue4: "Top" | "Bottom" | "Right" | "Left";
    GroupedTitle: string;
    GroupedName1: string;
    GroupedName2: string;
    SubmenuTitle: string;
    Submenu1: string;
    Submenu2: string;
};

interface DropdownListProps {
    /**
     * Positioning value of the Dropdown Menu/List in relation to the trigger/button with example values of: "top, bottom, left, right" ?.
     */
    dataSide?: "left" | "right" | "bottom" | "top";
    /**
     * Will be applied to the menu position based on the div around with example values of: "start, end, center".
     * */
    dataAlign?: "start" | "end" | "center";
    content?: DropdownListContent;
}

const testContent: DropdownListContent = {
    title: "Dropdown List",
    Choice1: "Wahl 1",
    Choice2: "Wahl 2",
    Checked: "Ist es gechecked ?",
    radioValue1: "Top",
    radioValue2: "Bottom",
    radioValue3: "Right",
    radioValue4: "Left",
    GroupedTitle: "Group Title",
    GroupedName1: "Group A",
    GroupedName2: "Group B",
    SubmenuTitle: "Wer ist der Beste ?",
    Submenu1: "Messi",
    Submenu2: "Ronaldo",
};

export const DropdownList = ({
                                 dataSide = "left",
                                 dataAlign = "center",
                                 content = testContent
                             }: DropdownListProps) => {

    const [position, setPosition] = React.useState("bottom");
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>{content.title}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side={dataSide} align={dataAlign}>
                <DropdownMenuItem onSelect={() => console.log("Banane")}>
                    {content.Choice1}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => console.log("Apfel")}>
                    {content.Choice2}
                </DropdownMenuItem>
                <DropdownMenuSeparator/>

                <DropdownMenuCheckboxItem checked={true} onCheckedChange={() => {
                }}>
                    {content.Checked}
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator/>

                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">
                        {content.radioValue1}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                        {content.radioValue2}{" "}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                        {content.radioValue3}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="left">
                        {content.radioValue4}
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>

                <DropdownMenuSeparator/>

                <DropdownMenuSeparator/>

                <DropdownMenuLabel>
                    {content.GroupedTitle}
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        {content.GroupedName1}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        {content.GroupedName2}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSub>
                    <DropdownMenuSeparator/>
                    <DropdownMenuSubTrigger>
                        {content.SubmenuTitle}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>{content.Submenu1}</DropdownMenuItem>
                        <DropdownMenuItem>{content.Submenu2}</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

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
    DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import React from "react";

export type DropdownListProps = {
    title: string
    Choice1: string
    Choice2: string
    Checked: string
    radioValue1: string
    radioValue2: string
    GroupedTitle: string
    GroupedName1: string
    GroupedName2: string
    SubmenuTitle: string
    Submenu1: string
    Submenu2: string
    content:[]
}
export default function DropdownList(props: DropdownListProps){
    return(

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>{props.title}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => console.log('Banane')}>{props.Choice1}</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => console.log('Apfel')}>{props.Choice2}</DropdownMenuItem>
                <DropdownMenuCheckboxItem checked={true} onCheckedChange={() => {}}>{props.Checked}</DropdownMenuCheckboxItem>
                <DropdownMenuRadioGroup value="radio1">
                    <DropdownMenuRadioItem value="radio1">{props.radioValue1}</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="radio2">{props.radioValue2}</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>{props.GroupedTitle}</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>{props.GroupedName1}</DropdownMenuItem>
                    <DropdownMenuItem>{props.GroupedName2}</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>{props.SubmenuTitle}</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>{props.Submenu1}</DropdownMenuItem>
                        <DropdownMenuItem>{props.Submenu2}</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
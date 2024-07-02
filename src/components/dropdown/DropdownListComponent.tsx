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
import { Button } from "@/components/ui/button";
import React from "react";

export type DropdownListContent = {
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
export type DropdownListProps = {
  dataSide: "left" | "right" | "bottom" | "top";
  dataAlign: "start" | "end" | "center";
  dataOrientation: "vertical" | "horizontal";
  content: [DropdownListContent];
};

export default function DropdownList(props: DropdownListProps) {
  const DropdownListContent: DropdownListContent = {
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
  const DemoContent: DropdownListProps = {
    dataSide: "left",
    dataAlign: "center",
    dataOrientation: "vertical",
    content: [DropdownListContent],
  };

  const [position, setPosition] = React.useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{DropdownListContent.title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={props.dataSide} align={props.dataAlign}>
        <DropdownMenuItem onSelect={() => console.log("Banane")}>
          {DropdownListContent.Choice1}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Apfel")}>
          {DropdownListContent.Choice2}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem checked={true} onCheckedChange={() => {}}>
          {DropdownListContent.Checked}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">
            {DropdownListContent.radioValue1}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            {DropdownListContent.radioValue2}{" "}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            {DropdownListContent.radioValue3}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">
            {DropdownListContent.radioValue4}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuSeparator />

        <DropdownMenuLabel>
          {DropdownListContent.GroupedTitle}
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {DropdownListContent.GroupedName1}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {DropdownListContent.GroupedName2}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuSubTrigger>
            {DropdownListContent.SubmenuTitle}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>{DropdownListContent.Submenu1}</DropdownMenuItem>
            <DropdownMenuItem>{DropdownListContent.Submenu2}</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

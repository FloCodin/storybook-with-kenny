import {Meta, StoryObj} from '@storybook/react';

import DropdownList from "@/components/dropdown/DropdownListComponent";

type DropdownList = {
    title: string
    Choice1: string
    Choice2: string
    Checked: string
    radioValue1: "Top" | "Bottom" | "Right"|"Left",
    radioValue2: "Top" | "Bottom" | "Right"|"Left",
    radioValue3: "Top" | "Bottom" | "Right"|"Left",
    radioValue4: "Top" | "Bottom" | "Right"|"Left",
    GroupedTitle: string
    GroupedName1: string
    GroupedName2: string
    SubmenuTitle: string
    Submenu1: string
    Submenu2: string
}

const meta = {
    title: 'Flo/Dropdown',
    component: DropdownList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof DropdownList>;
export default meta;
type Story = StoryObj<typeof meta>;

const dropdownListContent: DropdownList = {
    title: "Dropdown List",
    Choice1: "Wahl 1",
    Choice2: "Wahl 2",
    Checked: "Ist es gechecked?  ",
    radioValue1: "Top",
    radioValue2: "Bottom",
    radioValue3: "Right",
    radioValue4: "Left",
    GroupedTitle: "Group Title",
    GroupedName1: "Group A",
    GroupedName2: "Group B",
    SubmenuTitle: "Submenu Title",
    Submenu1: "Submenu 1",
    Submenu2: "Submenu 2",
}


export const Example1: Story = {
    args: {
        dataSide: "left",
        dataAlign: "center",
        dataOrientation:	"vertical",
        content: [dropdownListContent],
    }
};
export const Example2: Story = {
    args: {
        dataSide: "right",
        dataAlign: "center",
        dataOrientation:	"horizontal",
        content: [dropdownListContent],


    }
};


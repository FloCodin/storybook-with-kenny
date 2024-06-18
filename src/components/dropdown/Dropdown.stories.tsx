import {Meta, StoryObj} from '@storybook/react';

import DropdownList from "@/components/dropdown/DropdownListComponent";


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

const DropdownListContent = {
    title: "Dropdown List",
    Choice1: "Wahl 1",
    Choice2: "Wahl 2",
    Checked: "Hat es einen Haken? ",
    radioValue1: "Top",
    radioValue2: "Bottom",
    radioValue3: "Right",
    radioValue4: "Red",
    radioValue5: "Blue",
    radioValue6: "Green",
    GroupedTitle: "Group Title",
    GroupedName1: "Group A",
    GroupedName2: "Group B",
    SubmenuTitle: "Submenu Title",
    Submenu1: "Submenu 1",
    Submenu2: "Submenu 2",
}


export const example1: Story = {
    args: {
        dataSide: "left",
        dataAlign: "center",
        color: "blue",
        dataOrientation:	"vertical",
        content: [DropdownListContent],
    }
};
export const withTextAsParameter: Story = {
    args: {
        dataSide: "left",
        dataAlign: "center",
        color: "blue",
        dataOrientation:	"vertical",
        content: [DropdownListContent],


    }
};


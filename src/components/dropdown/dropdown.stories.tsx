import { Meta, StoryObj } from "@storybook/react";

import {DropdownList} from "@/components/dropdown/dropdownListComponent";

type DropdownList = {
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

const meta = {
  title: "Flo/Dropdown",
  component: DropdownList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof DropdownList>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Example1: Story = {
  args: {
    dataSide: "left",
    dataAlign: "center",
  },
};
export const Example2: Story = {
  args: {
    dataSide: "right",
    dataAlign: "center",
  },
};

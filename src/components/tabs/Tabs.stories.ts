import { TabsDemo} from "@/components/tabs/tabs";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Flo/Tab",
    component: TabsDemo,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TabsDemo>;
export default meta;
type Story = StoryObj<typeof meta>;


export type TabContentProps = {
    TabTitle1?: string
    TabTitle2?: string
}
const TabContentProps: TabContentProps = {
    TabTitle1: "Account",
    TabTitle2: "Password",
}


export const Standart: Story = {
    args: {
        orientation: "vertical",
        content: TabContentProps,
        color: "bg-blue-500",
        tabColor: "bg-gray-600",
        ButtonColor: "bg-tertiary",
    },
};
export const second: Story = {
    args: {
        orientation: "horizontal",
        content: TabContentProps,
        color: "bg-secondary",
        tabColor: "bg-gray-600",
        ButtonColor: "bg-tertiary",
    },
};
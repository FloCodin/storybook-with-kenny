import type { Meta, StoryObj } from "@storybook/react";
import Alert, { AlertContent } from "@/components/alert/Alert";

const meta = {
  title: "Flo/AlertDialog",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;


const alertContent: AlertContent = {
  triggerText: "Delete",
  textTitle: "Are you sure you want to delete everything",
  textDescription: "If you press continue, all of your files and memories will be deleted and be flush away, ",
};

export const Standart: Story = {
  args: {
    alertBackground: "bg-blue-500",
    triggerColor: "bg-secondary",
    textColor: "text-black",
    continueButton: "bg-orange-500",
    content: [alertContent],
  },
};
export const OtherContext: Story = {
  args: {
    alertBackground: "bg-purple-500",
    triggerColor: "bg-primary",
    textColor: "text-black",
    continueButton: "bg-red-500",
    content: [alertContent],
  },
};
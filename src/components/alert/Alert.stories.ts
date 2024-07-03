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
  triggerText: "Trigger",
  textTitle: "Werbung oder so",
  textDescription: "Hier könnte dein Text stehen",
};

export const Standart: Story = {
  args: {
    alertBackground: "bg-blue-500",
    triggerColor: "bg-secondary",
    textColor: "bg-black",
    continueButton: "bg-orange-500",
    content: [alertContent],
  },
};

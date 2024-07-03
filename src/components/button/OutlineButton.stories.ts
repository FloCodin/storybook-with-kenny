import type { Meta, StoryObj } from "@storybook/react";
import ButtonOutlined from "@/components/button/ButtonOutlined";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Flo/OutlinedButton",
  component: ButtonOutlined,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ButtonOutlined>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const success: Story = {
  args: {
    type: "success",
    label: "Button",
  },
};

export const Info: Story = {
  args: {
    label: "Button",
    type: "info",
  },
};

export const Warning: Story = {
  args: {
    label: "Button",
    type: "warning",
  },
};

export const Danger: Story = {
  args: {
    label: "Button",
    type: "danger",
  },
};

export const DefaultD: Story = {
  args: {
    type: "default",
    label: "Delete now",
  },
};

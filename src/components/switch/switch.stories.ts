import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./switch";

const meta = {
  title: "Flo/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const square: Story = {
  args: {
    rounded: false,
    colorChecked: "#0f91fc",
    colorUnchecked: "#cccccc",
  },
};
export const rounded: Story = {
  args: {
    rounded: true,
    colorChecked: "#12ff1d",
    colorUnchecked: "#000000",
  },
};

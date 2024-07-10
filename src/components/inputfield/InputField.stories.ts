import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputField from "@/components/inputfield/InputField";

const meta = {
  title: "Flo/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullName: Story = {
  args: {
    Input1Label: "First name",
    Input2Label: "Last name",
    InputId1: "first-name",
    InputId2: "last-name",
    Input1BorderColor: "blue",
    Input2BorderColor: "red",
    Input3BorderColor: "blue",
  },
};

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
    firstNameBorderColor: { control: "color" },
    lastNameBorderColor: { control: "color" },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullName: Story = {
  args: {
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    firstNameId: "first-name",
    lastNameId: "last-name",
    firstNameName: "first-name",
    lastNameName: "last-name",
  },
};

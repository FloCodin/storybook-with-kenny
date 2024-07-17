import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {InputField} from "@/components/inputfield/inputField";

const meta = {
  title: "Flo/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputBorderColor: {
      control: 'text',
    },
    backgroundColor: {
      control: 'text',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullBorderWithBG: Story = {
  args: {
    inputLabel: "Test name",
    inputId: "first-name",
    inputBorderColor: "border-red-400",
    backgroundColor: "bg-yellow-100",
    borderStyle: "border around",
    required: false,
    pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  },
};
export const BorderBottom: Story = {
  args: {
    inputLabel: "Test name",
    inputId: "first-name",
    inputBorderColor: "border-purple-400",
    backgroundColor: "bg-gray-100",
    borderStyle: "border bottom",
    required: false,
    pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  },
};
export const NoBorder: Story = {
  args: {
    inputLabel: "Test name",
    inputId: "first-name",
    inputBorderColor: "border-blue-400",
    backgroundColor: "bg-red-100",
    borderStyle: "no border",
    required: true,
    pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  },
};
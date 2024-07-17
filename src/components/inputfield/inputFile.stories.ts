import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {InputFile} from "@/components/inputfield/inputFile";

const meta = {
    title: "Flo/InputFile",
    component: InputFile,
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
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullBorderWithBG: Story = {
    args: {
        inputBorderColor: "border-red-400",
        backgroundColor: "bg-yellow-100",
        borderStyle: "border around",
    },
};
export const BorderBottom: Story = {
    args: {
        inputBorderColor: "border-purple-400",
        backgroundColor: "bg-gray-100",
        borderStyle: "border bottom",
    },
};
export const NoBorder: Story = {
    args: {
        inputBorderColor: "border-blue-400",
        backgroundColor: "bg-red-100",
        borderStyle: "no border",
    },
};
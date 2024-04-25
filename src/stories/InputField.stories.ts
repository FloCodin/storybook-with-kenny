import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputField from '@/components/InputField';

const meta = {
    title: 'Flo/InputField',
    component: InputField,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
        argTypes: {
            firstNameBorderColor: { control: 'color' },
            lastNameBorderColor: { control: 'color' },
        },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof InputField>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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


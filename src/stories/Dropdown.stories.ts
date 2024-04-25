import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown from '@/components/Dropdown';

export default {
    argTypes: {
        options: {
            control: {
                type: 'array',
            },
        },
    },
    component: Dropdown,
    title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>;

const Template: Story = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
};

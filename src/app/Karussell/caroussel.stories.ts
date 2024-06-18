import type {Meta, StoryObj} from '@storybook/react';

import karussellKomponent, {contentsDemo} from "@/app/Karussell/karussellKomponent";


const meta = {
    title: 'Flo/caroussel',
    component: karussellKomponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof karussellKomponent>;
export default meta;
type Story = StoryObj<typeof meta>;



export const contents: Story = {
        args: {
            slides: contentsDemo,

        },
    }
;

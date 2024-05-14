import type {Meta, StoryObj} from '@storybook/react';
import Alert from "@/components/Alert"


const meta = {
    title: 'Flo/Alert',
    component: Alert,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;



export const standart: Story = {
    args: {
        triggerColor : '#ef5b5b',
        triggerText : "The BAT",
        alertBackground : 'bg-primary',
        textColor: '#000000',
        textTitle : "I AM BATMAN",
        textDescription : "Batman is Batman cause he is a man dressed as as a bat, if a bat would be a hybrid with " +
            "a man it would be man-batman and a bat that becomes a man would be bat-man-bat ",
    },
};
export const secondary: Story = {
    args: {
        triggerColor : '#ef5b5b',
        triggerText : "The Youngling Slayer",
        alertBackground : 'bg-secondary',
        textColor: '#000000',
        textTitle : "Anakin Skywalker",
        textDescription : "Anakin Skywalker's unparalleled potential and skill in the Force marked him as one of " +
            "the most powerful Jedi in history. His journey from a slave on Tatooine to a Jedi Knight and ultimately " +
            "Darth Vader showcases his immense impact on the galaxy. Despite his fall to the dark side, his eventual " +
            "redemption and fulfillment of the Chosen One prophecy solidify his legacy as the greatest Jedi " +
            "to have ever lived.",
    },
};
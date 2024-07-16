import type { Meta, StoryObj } from "@storybook/react";

import {
  CarouselComponent,
  CarouselContent,
} from "@/app/carousel/CarouselComponent";

const meta = {
  title: "Flo/Caroussel",
  component: CarouselComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof CarouselComponent>;
export default meta;
type Story = StoryObj<typeof meta>;



export const withAutoStart: Story = {
  args: {
    autoplayDuration: 3000,
    autoplayOnInit: true,
    loop: true,
    border: true,
  },
};

export const noAutoStart: Story = {
  args: {
    autoplayDuration: 100,
    autoplayOnInit: false,
    loop: false,
    border: false,
  },
};

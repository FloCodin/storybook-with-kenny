import type { Meta, StoryObj } from "@storybook/react";

import CarouselComponent, {
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

const demoContent: CarouselContent[] = [
  {
    src: "./images/Messi.png",
    alt: "La Pulga, the Goat",
    text: "La Pulga, the Goat",
  },
  {
    src: "./images/Ronaldinho.png",
    alt: "Magician Dinho",
    text: "Magician Dinho",
  },
  {
    src: "./images/Iniesta.png",
    alt: "Maestro, visionary",
    text: "Maestro, visionary",
  },
];

export const withAutoStart: Story = {
  args: {
    autoplayDuration: 3000,
    autoplayOnInit: true,
    position: "center",
    loop: true,
    border: true,
    content: demoContent,
  },
};

export const noAutoStart: Story = {
  args: {
    autoplayDuration: 100,
    autoplayOnInit: false,
    position: "start",
    loop: false,
    border: false,
    content: demoContent,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CardComponent, {CardContents} from "@/components/card/Card"
import {CardContent} from "@/components/ui/card";

const meta = {
  title: "Flo/Card",
  component: CardComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof CardComponent>;
export default meta;
type Story = StoryObj<typeof meta>;


const TestContent: CardContents = {
  title: "Project Title",
  titleDescription: "here you can create your project",
  contentName: "Frameworks",
  selectTitle: "Framework",
  selectOption1: "Next.js",
  selectOption2: "React",
  selectOption3: "Vue.js",
  selectOption4: "Astro",
}
export const Example1: Story = {
  args: {
    cardWidth: "w-[400px]",
    cardColor: "bg-blue-500",
    continueButtonColor: "bg-green-500",
    cancelButtonColor: "bg-red-500",
    content: [TestContent],
  }
}
export const Example2: Story = {
  args: {
    cardWidth: "w-[600px]",
    cardColor: "bg-purple-500",
    continueButtonColor: "bg-black",
    cancelButtonColor: "bg-orange-500",
    content: [TestContent],
  }
}

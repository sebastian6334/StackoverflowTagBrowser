import type { Meta, StoryObj } from "@storybook/react";
import DisplayTagsComponent from "./DisplayTagsComponent";

const mockData = [
  { name: "javascript", count: 12 },
  { name: "python", count: 15 },
];

const meta = {
  title: "Example/DisplayTagsComponent",
  component: DisplayTagsComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof DisplayTagsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DisplayTagsComponentWithArg: Story = {
  args: {
    tags: mockData,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Example/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoaderComponent: Story = {};

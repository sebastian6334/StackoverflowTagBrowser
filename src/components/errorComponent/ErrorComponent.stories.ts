import type { Meta, StoryObj } from "@storybook/react";
import ErrorComponent from "./ErrorComponent";

const meta: Meta<typeof ErrorComponent> = {
  title: "Example/ErrorComponent",
  component: ErrorComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const withoutErrorMessage: Story = {
  args: {
    error: undefined,
  },
};

export const withErrorMessage: Story = {
  args: {
    error: "Example error message",
  },
};

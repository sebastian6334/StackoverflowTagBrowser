import type { Meta, StoryObj } from "@storybook/react";
import ToggleButton from "./ToggleButton";

const meta = {
  title: "Example/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleButtonWithArg: Story = {
  args: { titleArr: ["Yes", "No"] },
};

import type { Meta, StoryObj } from "@storybook/react";
import SelectField from "./SelectField";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/SelectField",
  component: SelectField,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectFieldWithArg: Story = {
  args: {
    title: "Sort by",
    handleChange: fn,
    menuItems: ["count", "name"],
    defaultValue: 1,
  },
};

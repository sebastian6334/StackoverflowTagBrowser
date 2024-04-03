import type { Meta, StoryObj } from "@storybook/react";
import NumberField from "./NumberField";

const meta = {
  title: "Example/NumberField",
  component: NumberField,
  tags: ["autodocs"],
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberFieldWithArg: Story = {
  args: {
    title: "PageSize",
    maxValue: 30,
    defaultValue: 10,
  },
};

export const NumberFieldWithoutArg: Story = {
  args: {},
};

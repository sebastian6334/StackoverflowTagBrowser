import type { Meta, StoryObj } from "@storybook/react";
import PaginationField from "./PaginationField";

const meta = {
  title: "Example/PaginationField",
  component: PaginationField,
  tags: ["autodocs"],
} satisfies Meta<typeof PaginationField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationFieldWithArg: Story = {
  args: { totalPages: 30, page: 1 },
};

export const PaginationFieldWithoutArg: Story = {
  args: {},
};

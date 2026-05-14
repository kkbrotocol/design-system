import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text",
    size: "md",
    type: "text",
    variant: "outline",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "inline-radio",
      options: ["outline", "filled", "ghost"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Types: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Text
        <Input placeholder="Company name" type="text" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Password
        <Input placeholder="Password" type="password" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Number
        <Input min={0} placeholder="0" type="number" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Search
        <Input placeholder="Search components" type="search" />
      </label>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <Input placeholder="Outline" variant="outline" />
      <Input placeholder="Filled" variant="filled" />
      <Input placeholder="Ghost" variant="ghost" />
      <Input invalid placeholder="Invalid" />
    </div>
  ),
};

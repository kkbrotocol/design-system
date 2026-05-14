import type { Meta, StoryObj } from "@storybook/nextjs";
import { Option, Select } from "./select";

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    size: "md",
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <label className="grid w-80 gap-2 text-sm font-medium text-foreground">
      Plan
      <Select {...args} defaultValue="growth">
        <Option value="starter">Starter</Option>
        <Option value="growth">Growth</Option>
        <Option value="enterprise">Enterprise</Option>
      </Select>
    </label>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <Select defaultValue="growth">
        <Option value="starter">Starter</Option>
        <Option value="growth">Growth</Option>
      </Select>
      <Select defaultValue="starter" disabled>
        <Option value="starter">Disabled</Option>
      </Select>
      <Select defaultValue="starter" invalid>
        <Option value="starter">Invalid</Option>
      </Select>
    </div>
  ),
};

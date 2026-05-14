import type { Meta, StoryObj } from "@storybook/nextjs";
import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    id: "newsletter",
    label: "Email updates",
    description: "Receive release notes and design token changes.",
    size: "md",
    variant: "brand",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "inline-radio",
      options: ["brand", "neutral"],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid gap-4">
      <Checkbox
        defaultChecked
        id="checked"
        label="Checked"
        description="The checkbox is selected."
      />
      <Checkbox id="unchecked" label="Unchecked" />
      <Checkbox disabled id="disabled" label="Disabled" />
      <Checkbox
        error="This selection is required."
        id="invalid"
        invalid
        label="Invalid"
      />
    </div>
  ),
};

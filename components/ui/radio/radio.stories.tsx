import type { Meta, StoryObj } from "@storybook/nextjs";
import { Radio, RadioGroup } from "./radio";

const meta = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    id: "monthly",
    label: "Monthly",
    name: "billing",
    size: "md",
    value: "monthly",
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Group: Story = {
  render: () => (
    <RadioGroup
      description="Choose how invoices should be issued."
      label="Billing cycle"
    >
      <Radio
        defaultChecked
        id="billing-monthly"
        label="Monthly"
        name="billing-cycle"
        value="monthly"
      />
      <Radio
        id="billing-annual"
        label="Annual"
        name="billing-cycle"
        value="annual"
      />
      <Radio
        disabled
        id="billing-custom"
        label="Custom"
        name="billing-cycle"
        value="custom"
      />
    </RadioGroup>
  ),
};
